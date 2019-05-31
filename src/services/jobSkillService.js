import api from './api'

export default {
  allJobs (offset) {
    return api('http://api.dataatwork.org/v1').get(`jobs?offset=${offset*500}&limit=500`)
  },
  allSkills (offset) {
    return api('http://api.dataatwork.org/v1').get(`skills?offset=${offset*500}&limit=500`)
  },
  jobsBySkill (skillID) {
    return api('http://api.dataatwork.org/v1').get(`skills/${skillID}/related_jobs`)
  },
  skillsByJob (jobID) {
    return api('http://api.dataatwork.org/v1').get(`jobs/${jobID}/related_skills`)
  },

}
