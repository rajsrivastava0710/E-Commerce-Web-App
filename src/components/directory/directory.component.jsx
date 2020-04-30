import React from 'react';
import MenuItem from '../menu-item/menu-item.component.jsx'
import './directory.style.scss'

class Directory extends React.Component{
    constructor(){
        super();
        this.state = {
            sections:[
                {
                    id : 1,
                    title:'Men',
                    color:'grey',
                    urlPath:'men',
                    imageURL:'https://cdn.pixabay.com/photo/2018/10/11/17/25/jacket-3740349_960_720.jpg'
                },
                {
                    id : 2,
                    title:'Women',
                    color:'green',
                    urlPath:'women',
                    imageURL:'https://cdn.pixabay.com/photo/2016/03/23/08/34/beautiful-1274361_960_720.jpg'
                },
                {
                    id : 3,
                    title:'Kids',
                    color:'yellow',
                    urlPath:'kids',
                    imageURL:'https://cdn.pixabay.com/photo/2018/04/30/17/26/autumn-3363362__340.jpg'
                },
                {
                    id : 4,
                    title:'Shoes',
                    color:'black',
                    urlPath:'shoes',                    
                    imageURL:'https://cdn.pixabay.com/photo/2017/07/02/19/24/dumbbells-2465478__340.jpg'
                },
                {
                    id : 5,
                    title:'Sports Wear',
                    color:'orange',
                    urlPath:'sports',
                    imageURL:'https://cdn.pixabay.com/photo/2017/04/22/10/15/sport-2250970__340.jpg'
                },

            ]
        }
    }
    render(){
        return (
            <div className='directory-menu'>
                {this.state.sections.map( ({id, ...remainingProps}) => (
                    <MenuItem key={id} { ...remainingProps }/>
                ))}
            </div>
        )
    }
}

export default Directory;