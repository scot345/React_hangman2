



const  head= (
    <div 
    style= {{
        width: "50px", 
        height:"50px",
         background:"black",
         borderRadius: "100%",
         border: "10px soild black",
        position:"absolute",
         top:"50px", 
         right:"-21px",
        }}
        />
 )

 const  Body= (
    <div 
    style= {{
        width: "10px", 
        height:"100px",
         background:"black",
        position:"absolute",
         top:"100px", 
         right:0,
        }}
        />
 )

 const  Right_Arm= (
    <div 
    style= {{
        width: "100px", 
        height:"10px",
         background:"black",
        position:"absolute",
         top:"150px", 
         right:"-100px",
         rotate: "-30deg",
         transformOrigin: "left bottom",
        }}
        />
 )


 const  Left_Arm= (
    <div 
    style= {{
        width: "100px", 
        height:"10px",
         background:"black",
        position:"absolute",
         top:"150px", 
         right:"10px",
         rotate: "30deg",
         transformOrigin: "right bottom",
        }}
        />
    )

    const  Right_leg= (
        <div 
        style= {{
            width: "100px", 
            height:"10px",
             background:"black",
            position:"absolute",
             top:"180px", 
             right:"-92px",
             rotate: "60deg",
             transformOrigin: "left bottom",
            }}
            />
        )

        const  Left_leg= (
            <div 
            style= {{
                width: "100px", 
                height:"10px",
                 background:"black",
                position:"absolute",
                 top:"190px", 
                 right:"6px",
                 rotate: "-30deg",
                 transformOrigin: "right bottom",
                }}
                />
            )



            const Body_Parts = [ head,
                Body,
                Right_Arm,
                Left_Arm,
                Right_leg,
                Left_leg]

            type HangmanDrawingProps = {
                numberOfGuesses: number
            }

export function HangmanDrawing ({numberOfGuesses}:HangmanDrawingProps){

return(
    <div style ={{position:"relative"}}>
        {Body_Parts.slice(0,numberOfGuesses)}
        
        <div style={{ height: "50px", width: "10px", background: "red", position: "absolute", top: 0, right: 0,}} />
        <div style={{ height: "10px", width: "200px", background: "green", marginLeft: "120px"}} />
        <div style={{ height: "400px", width: "10px", background: "grey", marginLeft: "120px"}} />
        <div style ={{ height: "12px", width: "250px", background:"black"}}>
         
       </div>
       </div>
       
)


}