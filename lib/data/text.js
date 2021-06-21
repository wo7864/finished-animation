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
    typing:{
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
                detail:'한 글자가 입력되는데 걸리는 시간',
                example:['0.1'],
                unit:'s',
                type:'text/num'
            },
            
        },
        description:'키보드로 타이핑 하듯, 문자가 하나씩 나타나는 애니메이션',
        codepenKey:'jOyLPLm',
    },

    typing2:{
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
            easingFunction:{
                required:'false',
                default:'easeOutQuart',
                detail:'애니메이션 재생 시 가속 함수',
                example:['easeOutQuart'],
                unit:null,
                type:'select/ease'
            },
            duration:{
                required:'false',
                default:'1',
                detail:'한 글자가 불투명해지는데에 걸리는 시간',
                example:['1.5'],
                unit:'s',
                type:'text/num'
            },
        },
        description:'한 글자씩 투명도 없애고 뚜렷하게 보여지는 애니메이션',
        codepenKey:'mdRMXGy',
    },

    neonText:{
        event:{
            view:2,
            scroll:2,
            hover:2,
            click:2,
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
            easingFunction:{
                required:'false',
                default:'easeOutQuart',
                detail:'애니메이션 재생 시 가속 함수',
                example:['easeOutQuart'],
                unit:null,
                type:'select/ease'
            },
            duration:{
                required:'false',
                default:'0.3',
                detail:'애니메이션 전체가 진행되는데에 걸리는 시간',
                example:['0.1'],
                unit:'s',
                type:'text/num'
            },
            bright:{
                required:'false',
                default:'0.3',
                detail:'불빛이 퍼지는 정도. 10~20정도가 적정선이다.',
                example:['0.1'],
                unit:null,
                type:'text/num'
            },
            
        },
        description:'텍스트 뒤로 빛나는 효과를 추가하는 애니메이션',
        codepenKey:'yLgoNjp',
    },

    cloudy:{
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
            easingFunction:{
                required:'false',
                default:'easeOutSine',
                detail:'애니메이션 재생 시 가속 함수',
                example:['easeOutQuart'],
                unit:null,
                type:'select/ease'
            },
            duration:{
                required:'false',
                default:'0.3',
                detail:'애니메이션 전체가 진행되는데에 걸리는 시간',
                example:['0.1'],
                unit:'s',
                type:'text/num'
            },
            blur:{
                required:'false',
                default:'60',
                detail:'초기 텍스트의 blur 값',
                example:['50'],
                unit:null,
                type:'text/num'
            },
            maxLetterSpacing:{
                required:'false',
                default:'30',
                detail:'초기 텍스트의 자간',
                example:['35'],
                unit:null,
                type:'text/num'
            },
            
        },
        description:`뿌옇게 흩어진 텍스트가 점점 모여드는 애니메이션. 텍스트의 길이가 길어져 줄바꿈이 발생할 수 있으니 css의 [white-space: nowrap;] 속성을 권장합니다.`,
        codepenKey:'WNREvaO',
    },

    jump:{
        event:{
            view:2,
            scroll:1,
            hover:2,
            click:2,
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
            easingFunction:{
                required:'false',
                default:'easeOutQuart',
                detail:'애니메이션 재생 시 가속 함수',
                example:['easeOutQuart'],
                unit:null,
                type:'select/ease'
            },
            duration:{
                required:'false',
                default:'1',
                detail:'한 글자가 올라갔다가 내려오는데에 걸리는 시간',
                example:['0.9'],
                unit:'s',
                type:'text/num'
            },
            timing:{
                required:'false',
                default:'-0.8',
                detail:'한 글자의 애니메이션 시작 시기. -0.8은 원래 시작 할 시기 보다 0.8초 앞당긴다는 의미를 가진다.',
                example:['-0.9'],
                unit:'s',
                type:'text/num'
            },
            height:{
                required:'false',
                default:'50',
                detail:'각 글자가 뛰는 최대 높이',
                example:['35'],
                unit:null,
                type:'text/num'
            },
            
        },
        description:'한 글자씩 차례대로 점프했다가 내려오는 애니메이션.',
        codepenKey:'poRrJYL',
    },
    
    appearFromBottom:{
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
            easingFunction:{
                required:'false',
                default:'easeOutQuart',
                detail:'애니메이션 재생 시 가속 함수',
                example:['easeOutQuart'],
                unit:null,
                type:'select/ease'
            },
            duration:{
                required:'false',
                default:'0.5',
                detail:'한 글자가 나타나는데에 걸리는 시간',
                example:['0.5'],
                unit:'s',
                type:'text/num'
            },
            timing:{
                required:'false',
                default:'-0.4',
                detail:'한 글자의 애니메이션 시작 시기. -0.8은 원래 시작 할 시기 보다 0.8초 앞당긴다는 의미를 가진다.',
                example:['-0.4'],
                unit:'s',
                type:'text/num'
            },
            
        },
        description:'한 글자씩 밑에서 위로 올라오는 애니메이션.',
        codepenKey:'qBRXVwa',
    },

    backColorCover:{
        event:{
            view:2,
            scroll:2,
            hover:2,
            click:2,
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
            easingFunction:{
                required:'false',
                default:'easeOutQuart',
                detail:'애니메이션 재생 시 가속 함수',
                example:['easeOutQuart'],
                unit:null,
                type:'select/ease'
            },
            duration:{
                required:'false',
                default:'1.5',
                detail:'애니메이션 총 진행시간',
                example:['1.5'],
                unit:'s',
                type:'text/num'
            },
            backgroundColor:{
                required:'false',
                default:'#fff',
                detail:'한 글자가 나타나는데에 걸리는 시간',
                example:['#333', 'rgb(33, 33, 33)'],
                unit:null,
                type:'color'
            },
            color:{
                required:'false',
                default:'#333',
                detail:'한 글자가 나타나는데에 걸리는 시간',
                example:['#fff', 'rgb(255, 255, 255)'],
                unit:null,
                type:'color'
            }
        },
        description:'텍스트의 색, 배경색을 슬라이드로 전환하는 애니메이션.',
        codepenKey:'OJWjzJE',
    },

    appearRotate:{
        event:{
            view:2,
            scroll:1,
            hover:1,
            click:1,
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
            easingFunction:{
                required:'false',
                default:'easeOutQuart',
                detail:'애니메이션 재생 시 가속 함수',
                example:['easeOutQuart'],
                unit:null,
                type:'select/ease'
            },
            duration:{
                required:'false',
                default:'1.5',
                detail:'애니메이션 총 진행시간',
                example:['1.5'],
                unit:'s',
                type:'text/num'
            },
            timing:{
                required:'false',
                default:'-0.4',
                detail:'한 글자의 애니메이션 시작 시기. -0.8은 원래 시작 할 시기 보다 0.8초 앞당긴다는 의미를 가진다.',
                example:['-0.4'],
                unit:'s',
                type:'text/num'
            },
        },
        description:'한 글자 씩 돌면서 나타나는 애니메이션',
        codepenKey:'ZELJrvv',
    },

    fillText:{
        event:{
            view:2,
            scroll:2,
            hover:2,
            click:2,
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
            easingFunction:{
                required:'false',
                default:'easeOutQuart',
                detail:'애니메이션 재생 시 가속 함수',
                example:['easeOutQuart'],
                unit:null,
                type:'select/ease'
            },
            duration:{
                required:'false',
                default:'1.5',
                detail:'애니메이션 총 진행시간',
                example:['1.5'],
                unit:'s',
                type:'text/num'
            },
        },
        description:'글자의 외곽선만 남긴 후, 슬라이드로 채우는 애니메이션',
        codepenKey:'mdRMXGy',
    },

    converText:{
        event:{
            view:2,
            scroll:2,
            hover:2,
            click:2,
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
            easingFunction:{
                required:'false',
                default:'easeOutQuart',
                detail:'애니메이션 재생 시 가속 함수',
                example:['easeOutQuart'],
                unit:null,
                type:'select/ease'
            },
            duration:{
                required:'false',
                default:'1.5',
                detail:'한 글자가 사라지거나 나타나는데 걸리는 시간.',
                example:['1.5'],
                unit:'s',
                type:'text/num'
            },
            afterText:{
                required:'true',
                default:'null',
                detail:'대체될 새로운 텍스트',
                example:['짱구와 철수도 친구입니다.'],
                unit:null,
                type:'text'
            },
        },
        description:'기존의 텍스트가 fade-out하고, 새로운 텍스트가 fade-in하는 애니메이션',
        codepenKey:'RwKZMwr',
    },

    
    converText2:{
        event:{
            view:2,
            scroll:2,
            hover:2,
            click:2,
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
            easingFunction:{
                required:'false',
                default:'easeOutQuart',
                detail:'애니메이션 재생 시 가속 함수',
                example:['easeOutQuart'],
                unit:null,
                type:'select/ease'
            },
            duration:{
                required:'false',
                default:'1.5',
                detail:'한 글자가 사라지거나 나타나는데 걸리는 시간.',
                example:['1.5'],
                unit:'s',
                type:'text/num'
            },
            afterText:{
                required:'true',
                default:'null',
                detail:'대체될 새로운 텍스트',
                example:['짱구와 철수도 친구입니다.'],
                unit:null,
                type:'text'
            },
        },
        description:'기존의 텍스트가 상단으로 올라가고, 새로운 텍스트가 하단에서 올라오는 애니메이션',
        codepenKey:'ExZvdvL',
    },
}
module.exports = {...data};
