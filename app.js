  
  let idedit=undefined;
  window.addEventListener('load', () => {
    axios.get("https://crudcrud.com/api/e3361385bcd34efbbe9e9a778ca2dc3c/seller")
    .then((res)=>{
      for(let i=0;i<res.data.length;i++)
      {
        showdata(res.data[i]);
      }
    }).catch((error)=>{
      console.log(error);
    })

    
  });
  let total=0;
  function showdata(data)
  {
   total=total+parseInt(data.price1);
   document.getElementById("total").innerHTML=total;
    console.log(total);
    var tbl=document.getElementById('items');
var tr=document.createElement("tr");
var nid=document.createElement("td");
var name1=document.createElement("td");
var price=document.createElement("td");
var btn=document.createElement("button");
btn.classList="delete";
tr.appendChild(nid);
tr.appendChild(name1);
tr.appendChild(price);
tr.appendChild(document.createElement("td").appendChild(btn));

nid.appendChild(document.createTextNode(data._id));
name1.appendChild(document.createTextNode(data.name));
price.appendChild(document.createTextNode(data.price1));
btn.appendChild(document.createTextNode("Remove"));
tbl.appendChild(tr);
  }

const app=document.getElementById("seller");

        app.addEventListener('submit',additm);

function additm(e)
{ 
  e.preventDefault();
    var name=document.getElementById("name").value;
    var price1=document.getElementById("price1").value;
    total=total+parseInt(price1);
   document.getElementById("total").innerHTML=total;
    document.getElementById("name").value="";
    document.getElementById("price1").value="";
    var obj={
          name:name,
          price1:price1
    };

    axios.post("https://crudcrud.com/api/e3361385bcd34efbbe9e9a778ca2dc3c/seller",obj)
    .then((res)=>{
      console.log(res.data);
    }).catch((error)=>{console.log(error)});
  //  Add route 
localStorage.setItem(`${price1}`,JSON.stringify(obj));
//creating a component to add in Table
var tbl=document.getElementById('items');
var nid=document.createElement("td");
var tr=document.createElement("tr");
var name1=document.createElement("td");
var price=document.createElement("td");
var btn=document.createElement("button");
btn.classList="delete";
tr.appendChild(nid);
tr.appendChild(name1);
tr.appendChild(price);
tr.appendChild(document.createElement("td").appendChild(btn));
nid.appendChild(document.createTextNode("#00XXXX"));
name1.appendChild(document.createTextNode(name));
price.appendChild(document.createTextNode(price1));
btn.appendChild(document.createTextNode("Remove"));
tbl.appendChild(tr);
}










const itemList=document.getElementById("items");
// Delete Event 
itemList.addEventListener('click',deleList);
function deleList(e)
{
  if(e.target.classList.contains('delete'))
  {
   if(confirm("Are you sure?"))
   {
 
    var tr=e.target.parentElement;
    // var subpcrice=tr.children[2].textContent;
    // total=total-parseInt(subpcrice);
    document.getElementById("total").innerHTML=total;

    itemList.removeChild(tr);
    axios.delete(`https://crudcrud.com/api/e3361385bcd34efbbe9e9a778ca2dc3c/seller/${tr.children[0].textContent}`)
    .then((res)=>{})
    .catch((e)=>{
      alert("Something is wrong cant delete from the server");
    })
   }
  }
 
}

