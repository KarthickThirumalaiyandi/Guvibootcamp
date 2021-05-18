function rvstring(str)
{
    var st  = []
    var st1 = []
    st = str.split("");
    console.log(st)
    for (i=st.length-1;i>=0;i--)
    {
        console.log(st[i])
        st1.push(st[i])
    }
    return st1.join("")
}

var rv = rvstring("karthick");
console.log(rv);