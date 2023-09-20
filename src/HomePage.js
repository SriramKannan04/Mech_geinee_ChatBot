import React from 'react'
import './Homepage.css';

function Homepage()
{
    return(
        <div className='big'>
            <table>
                <tr>
                    <td><img src="./img/bot2.png" className='Logo'  alt='#'/></td>
                    <td>
                       <p><h1 className='content'>In the world of mechanical design</h1></p>
                       <p><center><h3 className='content' id='two'>innovation is the engine that drives progress</h3></center></p>
                       <p><center><h3 className='content' id='three'>and shapes our future</h3></center></p>
                       <p><br /></p>
                       <p><center><button className='trail'>Free Trail</button></center></p>
                    </td>
                </tr>
            </table>
        </div>
    )
}



export default Homepage;