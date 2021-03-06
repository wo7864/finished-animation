
const data = {
    slide1:{
        event:{
            view:2,
            scroll:2,
            hover:0,
            click:0,
        },
        params:{
            target:{
                required:'true',
                default:'null',
                detail:'지정하고자 하는 속성의 선택자',
                example:['.text'],
                unit:null,
                type:'text'
                
            },
            duration:{
                required:'false',
                default:'0.3',
                detail:'애니메이션 총 진행시간',
                example:['0.5'],
                unit:'s',
                type:'text/num'
            },
            
        },
        description:'슬라이드 되며 이미지가 나타나는 애니메이션.',
        codepenKey:'KKavrQx',
    },
    slide2:{
        event:{
            view:2,
            scroll:2,
            hover:0,
            click:0,
        },
        params:{
            target:{
                required:'true',
                default:'null',
                detail:'지정하고자 하는 속성의 선택자',
                example:['.text'],
                unit:null,
                type:'text'
            },
            duration:{
                required:'false',
                default:'0.3',
                detail:'애니메이션 총 진행시간',
                example:['0.5'],
                unit:'s',
                type:'text/num'
            },
            
        },
        description:'슬라이드 되며 이미지가 나타나는 애니메이션.',
        codepenKey:'NWdvEoB',
    },
    slide3:{
        event:{
            view:2,
            scroll:2,
            hover:0,
            click:0,
        },
        params:{
            target:{
                required:'true',
                default:'null',
                detail:'지정하고자 하는 속성의 선택자',
                example:['.text'],
                unit:null,
                type:'text'
            },
            duration:{
                required:'false',
                default:'0.8',
                detail:'애니메이션 총 진행시간',
                example:['0.8'],
                unit:'s',
                type:'text/num'
            },
            
        },
        description:'슬라이드 되며 이미지가 나타나는 애니메이션.',
        codepenKey:'MWJvzxR',
    },
    rotate1:{
        event:{
            view:2,
            scroll:2,
            hover:0,
            click:0,
        },
        params:{
            target:{
                required:'true',
                default:'null',
                detail:'지정하고자 하는 속성의 선택자',
                example:['.text'],
                unit:null,
                type:'text'
            },
            duration:{
                required:'false',
                default:'1',
                detail:'애니메이션 총 진행시간',
                example:['1'],
                unit:'s',
                type:'text/num'
            },
            
        },
        description:'회전하며 이미지가 나타나는 애니메이션.',
        codepenKey:'rNjzQgB',
    },
    throw1:{
        event:{
            view:2,
            scroll:2,
            hover:0,
            click:0,
        },
        params:{
            target:{
                required:'true',
                default:'null',
                detail:'지정하고자 하는 속성의 선택자',
                example:['.text'],
                unit:null,
                type:'text'
            },
            duration:{
                required:'false',
                default:'1',
                detail:'애니메이션 총 진행시간',
                example:['1'],
                unit:'s',
                type:'text/num'
            },
            
        },
        description:'이미지가 날아오는 애니메이션.',
        codepenKey:'QWdMJRJ',
    },

    ghost1:{
        event:{
            view:2,
            scroll:2,
            hover:0,
            click:0,
        },
        params:{
            target:{
                required:'true',
                default:'null',
                detail:'지정하고자 하는 속성의 선택자',
                example:['.text'],
                unit:null,
                type:'text'
            },
            duration:{
                required:'false',
                default:'1',
                detail:'애니메이션 총 진행시간',
                example:['1'],
                unit:'s',
                type:'text/num'
            },
            gap:{
                required:'false',
                default:'20',
                detail:'잔상간의 거리',
                example:['1'],
                unit:null,
                type:'text/num'
            },
            cutCount:{
                required:'false',
                default:'5',
                detail:'잔상의 개수',
                example:['1'],
                unit:'ea',
                type:'text/num'
            },
            
        },
        description:'이미지가 잔상을 남기며 나타나는 애니메이션.',
        codepenKey:'abpyPvN',
    },
    ghost2:{
        event:{
            view:2,
            scroll:2,
            hover:0,
            click:0,
        },
        params:{
            target:{
                required:'true',
                default:'null',
                detail:'지정하고자 하는 속성의 선택자',
                example:['.text'],
                unit:null,
                type:'text'
            },
            duration:{
                required:'false',
                default:'1',
                detail:'애니메이션 총 진행시간',
                example:['1'],
                unit:'s',
                type:'text/num'
            },
            gap:{
                required:'false',
                default:'40',
                detail:'잔상간의 거리',
                example:['1'],
                unit:null,
                type:'text/num'
            },
            cutCount:{
                required:'false',
                default:'5',
                detail:'잔상의 개수',
                example:['1'],
                unit:'ea',
                type:'text/num'
            },
            
        },
        description:'이미지가 잔상을 남기며 나타나는 애니메이션.',
        codepenKey:'qBRXLOq',
    },
    chewing:{
        event:{
            view:2,
            scroll:2,
            hover:0,
            click:0,
        },
        params:{
            target:{
                required:'true',
                default:'null',
                detail:'지정하고자 하는 속성의 선택자',
                example:['.text'],
                unit:null,
                type:'text'
            },
            duration:{
                required:'false',
                default:'1',
                detail:'애니메이션 총 진행시간',
                example:['1'],
                unit:'s',
                type:'text/num'
            },
        },
        description:'이미지가 껌처럼 늘어나며 나타나는 애니메이션.',
        codepenKey:'abpyPmm',
    },
}

module.exports = {...data};
