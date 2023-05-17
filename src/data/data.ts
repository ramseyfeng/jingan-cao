import oneFlowerImg from '@/assets/img/1flower.jpg';
import twoFlowerImg from '@/assets/img/2flowers.jpg';
import threeFlowerImg from '@/assets/img/3flowers.jpg';
import type { IGift } from "@/model/gift.interface";
import oneLollipop from '@/assets/img/1lollipop.jpg';
import twoLollipop from '@/assets/img/2lollipops.jpg';
import threeLollipop from '@/assets/img/3lollipops.jpg';


export const jpgImages: IGift[] = [
    {
        name: '一颗糖',
        idx: 21,
        img: oneLollipop
    },
    {
        name: '两颗糖',
        idx: 22,
        img: twoLollipop
    },
    {
        name: '三颗糖',
        idx: 22,
        img: threeLollipop
    },
    {
        img: oneFlowerImg,
        idx: 1,
        name: '1 朵太阳花'
    },
    {
        img: twoFlowerImg,
        idx: 2,
        name: '2 朵太阳花'
    },
    {
        img: threeFlowerImg,
        idx: 3,
        name: '3 朵太阳花'
    }
];
