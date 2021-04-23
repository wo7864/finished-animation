const data = {
    playCanvasVideo:{
        event:{
            view:0,
            scroll:0,
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
            images:{
                required:'true',
                default:'null',
                detail:'지정하고자 하는 속성의 선택자',
                example:[{
                    path: '../static/images1/',
                    filename: 'image_000000',
                    count: 151,
                    extension: 'jpg'
                  }],
                unit:null,
                type:'json'
            }
        },
        description:'캔버스 비디오 재생을 위한 애니메이션',
        codepenKey:'yLgXgKd',
    },
}

module.exports = {...data};
