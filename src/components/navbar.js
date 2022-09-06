import React from 'react';

const Navbar = () => {
    return (
        <>
            <div style={{backgroundColor:"#9c1de760",display:'flex',alignItems:'center',justifyContent:'center',position:'fixed',width:"100%"}}>
                <ul style={{display:'flex',flexDirection:'row',width:"60%"}}>
                    <li style={{listStyle:'none',flexGrow:1,fontSize:20,marginLeft:5,marginRight:5,color:"#ffffff",borderWidth:1,borderRadius:8,padding:5,backgroundColor:"#581b9870",display:'flex',alignItems:'center',justifyContent:'center'}} >Breaking News</li>
                    <li style={{listStyle:'none',flexGrow:1,fontSize:20,marginLeft:5,marginRight:5,color:"#ffffff",borderWidth:1,borderRadius:8,padding:5,backgroundColor:"#581b9870",display:'flex',alignItems:'center',justifyContent:'center'}} >Entertainment</li>
                    <li style={{listStyle:'none',flexGrow:1,fontSize:20,marginLeft:5,marginRight:5,color:"#ffffff",borderWidth:1,borderRadius:8,padding:5,backgroundColor:"#581b9870",display:'flex',alignItems:'center',justifyContent:'center'}} >Economics</li>
                    <li style={{listStyle:'none',flexGrow:1,fontSize:20,marginLeft:5,marginRight:5,color:"#ffffff",borderWidth:1,borderRadius:8,padding:5,backgroundColor:"#581b9870",display:'flex',alignItems:'center',justifyContent:'center'}} >Technology</li>
                    <li style={{listStyle:'none',flexGrow:1,fontSize:20,marginLeft:5,marginRight:5,color:"#ffffff",borderWidth:1,borderRadius:8,padding:5,backgroundColor:"#581b9870",display:'flex',alignItems:'center',justifyContent:'center'}} >Contact us</li>
                    <li style={{listStyle:'none',flexGrow:1,fontSize:20,marginLeft:5,marginRight:5,color:"#ffffff",borderWidth:1,borderRadius:8,padding:5,backgroundColor:"#581b9870",display:'flex',alignItems:'center',justifyContent:'center'}} >About us</li>
                </ul>
            </div>
        </>
    )
} 


export default Navbar ;