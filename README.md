**Instructions to run locally**

- We are gonna start with npm init -y
- Then download the dependencies, npm install express
- then run locally node server.js

**Deployed API URL*


**endpoints with example request**
- POST (api/events) writing all the events(201 created)
- GET (api/events) retriving the events(200ok)
- GET (api/events/id:) retriving the event of the id mentioned(200ok)
- PUT (api/events/id:) updating the events(200ok)
- DELETE (api/events/id:) deleting the particular mentioned event(200ok)
- GET (api/events/id:) checking if the deleted events is still there or deleted(404 Not Found)