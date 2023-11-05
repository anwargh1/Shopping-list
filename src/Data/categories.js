import {AiOutlineSkin} from 'react-icons/ai'
import {GiJewelCrown} from 'react-icons/gi'
import {CgPlug} from 'react-icons/cg'
import {GiLargeDress} from 'react-icons/gi'
import {MdOutlineDoneAll} from 'react-icons/md'
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const  categories = [
    {
        id:1,
        title: "Women's clothing",
        icon:<GiLargeDress/>
    },
    {
        id:2,
        title: "Electronics",
        icon:<CgPlug/>
    },
    {
        id:3,
        title: "Jewelery",
        icon:<GiJewelCrown/>
    },
    {
        id:4,
        title: "Men's clothing",
        icon:<AiOutlineSkin/>
    },{
        id:5,
        title: "All",
        icon:<MdOutlineDoneAll/>
    },{
        id:6,
        title: "Cart",
        icon:<AiOutlineShoppingCart />

    },{
        id:7,
        title: "Favorite",
        icon:<AiOutlineHeart />
    }
]


export default categories