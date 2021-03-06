/***********data 양식**************
    animationName:{
        event:{
            scroll:0,
            hover:2,
            click:0,
        },
        params:{
            target:{
                need:'true',
                default:'null',
                detail:'지정하고자 하는 속성의 선택자',
                example:['.button']
            },
            imageSrc:{
                need:'true',
                default:'null',
                detail:'그려지는 이미지의 참조 주소',
                example:['https://i.ibb.co/GsF10Nb/4.jpg', 'image.png'],
            },
            imageWidth:{
                need:'false',
                default:'300',
                detail:'그려지는 이미지의 너비',
                example:['250'],
            },
            imageHeight:{
                need:'false',
                default:'200',
                detail:'생성되는 이미지의 높이',
                example:['250'],
            },
            cursor:{
                need:'false'
                default:'true',
                detail:'커서 표시 유무',
                example:['true', 'false']
            }
        },
        description:'마우스에 커서를 올리면, 이미지가 생성되어 따라다니는 애니메이션.',
        codepenKey:'yLgXgKd',
    },
*/


const data = {
    imageCursor:{
        event:{
            view:0,
            scroll:0,
            hover:2,
            click:0,
        },
        params:{
            target:{
                required:'true',
                default:'null',
                detail:'지정하고자 하는 속성의 선택자',
                example:['.button'],
                unit:null,
                type:'text'
            },
            imageSrc:{
                required:'true',
                default:'null',
                detail:'그려지는 이미지의 참조 주소',
                example:['https://i.ibb.co/GsF10Nb/4.jpg', 'image.png'],
                unit:null,
                type:'file/image'
            },
            imageWidth:{
                required:'false',
                default:'300',
                detail:'그려지는 이미지의 너비',
                example:['250'],
                unit:null,
                type:'text/num'
            },
            imageHeight:{
                required:'false',
                default:'200',
                detail:'생성되는 이미지의 높이',
                example:['250'],
                unit:null,
                type:'text/num'
            },
            cursor:{
                required:'false',
                default:'true',
                detail:'커서 표시 유무',
                example:['true', 'false'],
                unit:null,
                type:'checkbox'
            }
        },
        description:'마우스에 커서를 올리면, 이미지가 생성되어 따라다니는 애니메이션.',
        codepenKey:'yLgXgKd',
    },

    stickyFadeInOut:{
        event:{
            view:0,
            scroll:2,
            hover:0,
            click:0,
        },
        params:{
            target:{
                required:'true',
                default:'null',
                detail:'지정하고자 하는 속성의 선택자',
                example:['.button'],
                unit:null,
                type:'text'
            },
        },
        description:'스크롤을 내리면, 대상이 Fade In되어 나타나고, FadeOut 되어 사라지는 애니메이션',
        codepenKey:'yLgXgKd',
    },

    stickyScaleUp:{
        event:{
            view:0,
            scroll:2,
            hover:0,
            click:0,
        },
        params:{
            target:{
                required:'true',
                default:'null',
                detail:'지정하고자 하는 속성의 선택자',
                example:['.button'],
                unit:null,
                type:'text'
            },
        },
        description:'스크롤을 내리면, 대상이 ScaleUp 되어 나타나며, FadeOut 되어 사라지는 애니메이션.',
        codepenKey:'yLgXgKd',
    },
}

module.exports = {...data};
