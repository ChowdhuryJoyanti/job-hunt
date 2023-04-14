// add data to local storage
const addToDb = id =>{
    // localStorage.setItem('view-details',id)

    let viewDetails = {}
    // get previous data from local storage

    const storedDetails = localStorage.getItem('view-details')
    if(storedDetails){
        viewDetails = JSON.parse(storedDetails)
    }


    // add quantity
    const quantity = viewDetails[id]
    if(quantity){
        
    }

}
export {addToDb}