let PageNo=1;
let PageTitle=document.getElementById('pagetitle');
let issuList=document.getElementById('list');

function Getissues(page){
    let url=`https://api.github.com/repositories/1296269/issues?page=${page}&per_page=5`;
    
    fetch(url).then((response)=>response.json)
    .then(data=>{
        console.log(data);
        issuList.innerHTML="";
        data.forEach(issu => {
            let listItem=document.createElement('li');
            listItem.textContent=issu.title;
            issuList.appendChild(listItem);
            PageTitle.innerHTML=`PageNumber ${page}`;
        });

    }).catch(e=>console.error(e))
}
Getissues(PageNo);