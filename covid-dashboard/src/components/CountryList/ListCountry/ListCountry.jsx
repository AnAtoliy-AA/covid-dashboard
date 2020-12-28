import React from 'react';
import styles from '../CountryList.module.scss';

export default function ListCountry (props){
           if(props.countryInfoList !== undefined)  {
               return(props.countryInfoList.map((c) => {
                return (
                    <div key={c.country}>
                    <div
                        className={styles.countries}
                        onClick={() => {
                            debugger;
                        props.onCountryChanged(c);
                        }}
                    >
                        <img
                        alt='logo'
                        src={c.countryInfo.flag}
                        className={styles.countryItem_flag}
                        />
                        <span className={styles.totalConfirmed}>
                        {c.cases}
                        </span>
                        <span>{c.country}</span>
                    </div>
                    <hr />
                    </div>
                );
                }))
                
            } else{
               return (<p>Something went wrong with API. Please, try again later!</p>)
            }
       
}


// export default class ListCounty extends Component{
//     onCountryChanged=(c)=>{
//         this.props.onCountryChanged(c)
//     }
//     render(){
//         return (
//             <div>
//             {this.props.countryInfoList !== undefined ? (
//                 this.props.countryInfoList.map((c) => {
//                 return (
//                     <div key={c.country}>
//                     <div
//                         className={styles.countries}
//                         onClick={() => {
//                         this.onCountryChanged(c);
//                         }}
//                     >
//                         <img
//                         alt='logo'
//                         src={c.countryInfo.flag}
//                         className={styles.countryItem_flag}
//                         />
//                         <span className={styles.totalConfirmed}>
//                         {c.cases}
//                         </span>
//                         <span>{c.country}</span>
//                     </div>
//                     <hr />
//                     </div>
//                 );
//                 })
//             ) : (
//                 <p>Something went wrong with API. Please, try again later!</p>
//                 )}
//         </div>  
//         )
//     }
// }


