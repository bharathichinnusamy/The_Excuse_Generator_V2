console.log("hello world")
const anExcuse = () => {
    let who = ['i', 'my daugther', 'our grandpa'];
    let what = ['studied', 'slept', 'played'];
    let when = ['earlier yesterday', 'yesterday evening', 'last night']
    var x = Math.floor(Math.random() * (who.length))
    var y = Math.floor(Math.random() * (what.length))
    var z = Math.floor(Math.random() * (when.length))
    let final=who[x]+' '+what[y]+' '+when[z]
    console.log(final)
    document.getElementById("app").innerHTML=final

}