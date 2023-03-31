let x=new Date()
let res=x.getDay()
switch(res){
    case 0:
        res="sunday"
        break;
        case 1:
            res="mon"
            break;
            case 5:
                res="fri"
                break;
    }
    console.log(res);