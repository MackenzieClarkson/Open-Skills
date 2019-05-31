import React, {Component} from 'react';
import jobSkillService from '../services/jobSkillService'
import List from './List'
var BarChart = require("react-chartjs").Bar;
class Job extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      selectedJob: '',
      selectedSkill: '',
      jobsForSkill: [],
      skillsForJob: [],
      skills: [],
      error: '',
      jobOffsetList: Array.from(Array(92), (x, ind) => ind + 1),
      skillOffsetList: Array.from(Array(55), (x, ind) => ind + 1),
      barData: '',
      showChart: false,
    }
    this.getJobs = this.getJobs.bind(this)
    this.getSkills = this.getSkills.bind(this)
    this.getSkillsByJob = this.getSkillsByJob.bind(this)
    this.getJobsBySkill = this.getJobsBySkill.bind(this)
  }
  componentDidMount() {
    this.getJobs(1)
    this.getSkills(1)
  }
  async getJobs(offset) { //Get Full Job List offset = page
    try{
      const res = await jobSkillService.allJobs(offset - 1)
      const jobList = res.data.map(job => {
        return {job: job.title, uuid: job.uuid}
      })
      this.setState({
        jobs: [
          {
            job: '',
            uuid: ''
          }
        ].concat(jobList)
      })
    }
    catch(err){
      this.setState({error: err})
    }
  }
  async getSkills(offset) { //Get Full Skills List offset = page
    const res = await jobSkillService.allSkills(offset - 1)
    try{
      const skillList = res.data.map(skill => {
        return {skill: skill.name, uuid: skill.uuid}
      })
      this.setState({
        skills: [
          {
            skill: '',
            uuid: ''
          }
        ].concat(skillList)
      })
    }
    catch(err){
      var error = err.response.data.error.message
      this.setState({error: error})
    }

  }
  async getSkillsByJob(job) {

    try{
      var skillsForJob = await jobSkillService.skillsByJob(job)
      var chartData = {}
      var barDataObject = skillsForJob.data.skills.filter(skill =>{
         chartData[skill.skill_name] = skill.importance
      })

      var barData = {
        labels: Object.keys(chartData).splice(0,20),
        datasets: [{
          fillColor: "rgba(50,80,220,0.7)",
          label: 'Skill Importance',
          data: Object.values(chartData).splice(0,20),
        }]

      }

      this.setState({skillsForJob: skillsForJob.data.skills, selectedJob: skillsForJob.data.job_title, barData: barData, error: ''})
    }
    catch(err){
      var error = err.response.data.error.message
      this.setState({error: error})
      console.error(err)
    }

  }
  async getJobsBySkill(skill) {
    try{
      var jobsForSkill = await jobSkillService.jobsBySkill(skill)
      this.setState({jobsForSkill: jobsForSkill.data.jobs, selectedSkill: jobsForSkill.data.skill_name, error: ''})
    }
    catch(err){
      var error = err.response.data.error.message
      this.setState({error: error})
    }
  }
  render() {
    return (
      <div>
      <div className='quarter-wrap card center'>
        <h4>
          Job List
        </h4>
        <label for='page'>
          Page
        </label>
        <select id='page' onChange={(e) => {
            this.getJobs(e.target.value)
          }}>
          {
            this.state.jobOffsetList.map((n) => <option key={n} value={n}>
              {n}
            </option>)
          }
        </select>
        <div>
          <label for='joblist'>
            Job Dropdown
          </label>
          <select id="joblist" className='no-overlap' defaultValue={'def'} onChange={(e) => {
              this.getSkillsByJob(e.target.value)

            }}>
            <option value="def" disabled="disabled">
              Select Job
            </option>
            {
              this.state.jobs.map((job) => <option key={job.uuid} value={job.uuid}>
                {job.job}
              </option>)
            }
          </select>
        </div>
        <h4>
          Skill List
        </h4>

        <label for='page'>
          Page
        </label>
        <select id='page' onChange={(e) => {
            this.getSkills(e.target.value)
          }}>
          {
            this.state.skillOffsetList.map((n) => <option key={n} value={n}>
              {n}
            </option>)
          }
        </select>
        <div>
          <label for='skill-list'>
            Skill Dropdown
          </label>
          <select id="skill-list" className='no-overlap' defaultValue={'def2'} onChange={(e) => {
              this.getJobsBySkill(e.target.value)
            }}>
            <option value="def2" disabled="disabled">
              Select Skill
            </option>
            {
              this.state.skills.map((skill) => <option key={skill.uuid} value={skill.uuid}>
                {skill.skill}
              </option>)
            }
          </select>
          {this.state.selectedJob &&
            <div>
            <h4>
              View Skill Importance
            </h4>
            <label>
              Show Charts
            </label>
            <input
              type='checkbox'
              onChange = {() => this.setState({showChart: !this.state.showChart})}
              >
            </input>
            </div>
          }
        </div>

        {this.state.error &&
        <div className="error">
          {this.state.error}
        </div>}
      </div>
        {this.state.barData && this.state.showChart &&
          <div >
            <h4>Skill Importance for {this.state.selectedJob}(Top 20)</h4>
            <BarChart
              data={this.state.barData}
              width='800px'
              height='500px'
              />
          </div>
        }

      {this.state.selectedJob && !this.state.showChart &&
      <div className='quarter-wrap card'>
        <List
          updateKey = {this.state.selectedJob}
          getMethod = {this.getJobsBySkill}
          list = {this.state.skillsForJob}
          title = {"Skills For " + this.state.selectedJob}
          subtitle = "Select Skill to get Related Jobs"
          listKey='skill_name'
          methodKey= 'skill_uuid'
          />
      </div>}
    {
      this.state.selectedSkill && !this.state.showChart &&
      <div className='quarter-wrap card'>
        <List
          getMethod = {this.getSkillsByJob}
          updateKey = {this.state.selectedSkill}
          list = {this.state.jobsForSkill}
          title = {'Jobs that Want ' + this.state.selectedSkill}
          subtitle ="Select Job to get Related Skills"
          listKey='job_title'
          methodKey='job_uuid'
          />
      </div>
    }

    </div>
    )
  }
}
export default Job
