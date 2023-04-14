const  appliedJobsLoader = async () => {
const loadedJobs  = await fetch('featuresData.json')
const jobs = await loadedJobs.json();

const storedJobs = 
 
console.log(jobs);
return jobs;


}
export  default appliedJobsLoader;