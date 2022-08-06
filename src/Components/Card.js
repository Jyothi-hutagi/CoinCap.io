import React ,{useEffect,useState}from 'react'
import './Card.css'

const Card = () => {
   
    const formatPercent = number => 
    `${new Number(number).toFixed(2)}%`

    const formatDollar = (number, maximumSignificantDigits) =>
    new Intl.NumberFormat(
      'en-US', 
      { 
        style: 'currency', 
        currency: 'USD',
        maximumSignificantDigits
      })
      .format(number);


     
    const divstyle={
        display: "inline-block", 
        verticalAlign: "middle"
    }

    const pstyle={
        fontSize: "0.8em",
         opacity: "0.7"
    }
    const[user,setUser]= useState([]);
    useEffect(()=>{
        fetch("https://api.coincap.io/v2/assets")
        .then((result)=>{
            result.json().then((res)=>{
                setUser(res.data)
            })
        })
    },[])
    console.log(user)
   
    const image= (user)=>
        `${(user.symbol).toLowerCase}`
   const url=()=>
   
    `${`https://assets.coincap.io/assets/icons/${image}@2x.png`}`


  return (
    <div>

       
        <div className='tablemain'>
                        <div className='tablesub'>
                         <table className="selectable">
                        <thead className="tablehead">
                        <tr className="centeraligned">
                        <th colSpan="1" className="rank">Rank </th>
                        <th colSpan="2" className="leftaligned">Name </th><th colSpan="1" className="right aligned">Price  </th>
                        <th colSpan="1" className="rightaligned ">Market Cap  </th>
                        <th colSpan="1" className="rightaligned "><span>VWAP (24Hr) </span></th>
                        <th colSpan="1" className="rightaligned ">Supply  </th>
                        <th colSpan="1" className="rightaligned ">Volume (24Hr) </th>
                        <th colSpan="1" className="rightaligned ">Change (24Hr) </th>
                        
                        </tr>
                </thead>
                
                <tbody className="tablebody">
                
                  {user.map((item)=>(
                    <>
                   
                     <tr className="rightaligned ">
                <td className="centeraligned">{item.rank}</td>
                <td colSpan="2" className="leftaligned">
                <img src={url} className="bitcoinlogo " alt='logo'/>
                <div className="ellipsis" style={divstyle}>
                <a href="#">{item.name}
                <p style={pstyle}>{item.symbol}</p>
                </a>
                </div>
                </td>
                 <td className="xs-hidden">
                <span className="Numeral ">
                 {formatDollar(item.priceUsd)}
                    </span>
                </td>
                <td className="xs-hidden">
                <span className="Numeral">
                {formatDollar(item.marketCapUsd)}
                    </span>
                </td>
                <td className="tablet-hidden ">
                <span className="Numeral "> {formatDollar(item.vwap24Hr)}</span>
                </td>
                <td className="tablet-hidden">
                <span className="Numeral "> {formatDollar(item.vwap24Hr)}</span>
                </td>
                <td className="xs-hidden">
                <span className="Numeral "> {formatDollar(item.vwap24Hr)}</span>
                </td>
                <td className="">
                <span className="numeralgreen" style={{color:item.changePercent24Hr<0 ? '#f0616d' : '#26ad75'}}>
                    {item.changePercent24Hr < 0 ? '': '+'}
                    {formatPercent(item.changePercent24Hr)}
                   
                    </span>
                </td>
                </tr>
                    </>
                  ))}
               

                </tbody>
                </table>
                </div>
                </div>
                
        
      
    </div>
  )
}

export default Card