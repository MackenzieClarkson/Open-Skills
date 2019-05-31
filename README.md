## Application Description
Included a simple NASA retrieval page since Data At Work API was offline during development.
Application is responsive by using % and viewport based CSS while using no styling libraries.
Jobs Page uses Open Skills API to show lists of skills and jobs and selecting job will display related skills and vice versa.  

# NASA Page
Select date from dropdown to show NASA's image of the day for that date.

# Jobs Page
Select Job from Dropdown
A list of related skills will render and each skill in the rendered list can also be selected to render related jobs, or, select from dropdown.
If a job is selected a chart checkbox can be selected to view Bar chart of top 20 skills in that job.

## Packages Used
Create-React-App is excellent for starting new React Applications quickly. It is very suitable for this scale of application.
Chart-js was used to display bar chart.
No overall styling frameworks were used.
Axios was used for API connection for better error reporting and cleaner code than fetch (in my opinion).
React-router

## Performance & Reliability Considerations
Using non blocking fetching techniques (promises, async, await) were used for performance so that code is not halted by data fetching.
A hashset data structure is used where applicable such as bar chart. 
Error reporting functionality on api calls to notify user of what went wrong (i.e API is down).
Redux was not used as it is not necessary for this scale of application.
Though not necessary, a react-router was used to benefit possible scaling up of Application and ease of Single Page Routing. 

## Future Considerations/Implementation
With more time, modularity can be improved on some components which are larger than desired, and do far too much. This can be achieved with more pure components and separation of concerns, generally.
Add search to jobs and skills and leverage the /autocomplete endpoint, instead of dropdown.
Add Loading status indicator for user while data is fetching.
Refactor out inline arrow functions.
Add unit testing either with manual asserts or leverage Jest to check expected lifecycle states.

## Extra Notes
Open Skills API is often down.
Please check with http://api.dataatwork.org/v1/spec/#/ to verify.
A screenshot folder is included in public/screenshots in case APIs are down, views can be seen there. So far ~8-10 hours have been put into this project. 

## Deployment
See CRA.md
