let PageNo=1;
let PageTitle=document.getElementById('pagetitle');
let issuList=document.getElementById('list');

function Getissues(page){
    let url=`https://api.github.com/repositories/1296269/issues?page=${page}&per_page=5`;
    
    fetch(url).then((response)=>response.json())
    .then(data=>{
        console.log(data);
        issuList.innerHTML="";
        data.forEach(issue => {
            let listItem=document.createElement('li');
            listItem.textContent=issue.title;
            issuList.appendChild(listItem);
            PageTitle.innerHTML=`PageNumber ${page}`;
        });

    }).catch(e=>console.error(e))
}
Getissues(PageNo);

function loadPrev(){
    if(PageNo>1){
        PageNo--;
        Getissues(PageNo);
    }
}

function loadNext(){
        PageNo++;
        Getissues(PageNo);
}