function CallBack(){
    
    let one=(two)=>{
        setTimeout(()=>{
            document.write("HTML")
            console.log(prompt(''))
            two(three)
        },5000)
    }
    let two=(three)=>{
        setTimeout(()=>{
            document.write('CSS')
            console.log(prompt(''))
            three(four)
        },4000)
    }
    let three=(four)=>{
        setTimeout(()=>{
            document.write('JAVASCRIPT')
            console.log(prompt(''))
            four(five)
        },3000)
    }
    let four=(five)=>{
        setTimeout(()=>{
            document.write('REACT')
            console.log(prompt(''))
            five(six)
        },2000)
    }
    let five=(six)=>{
        setTimeout(()=>{
            document.write('PYTHON')
            console.log(prompt(''))
            six(seven)
        },1000)
    }
    let six=(seven)=>{
        setTimeout(()=>{
            document.write('DJANGO')
            console.log(prompt(''))
            seven(eight)
        },1100)
    }
    let seven=(eight)=>{
        setTimeout(()=>{
            document.write('MYSQL')
            console.log(prompt())
            eight()
        },1200)
    }
    let eight=()=>{
        console.error("Finished")
    }
    one(two,three,four,five,six,seven,eight)
    
    // let fetchdata=async()=>{
    //     let data=await fetch("https://dummyjson.com/products");
    //     let finaldata=await data.json();
    //     console.log(finaldata)
    // }
    // fetchdata()

    }
    export default CallBack;
    