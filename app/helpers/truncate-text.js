import { helper } from '@ember/component/helper';

export function truncateText(params) {
  // console.log(params[0]);
  // console.log(params[0].length);
  // console.log(params[1]);

  if(params[0].length > params[1]){
    let truncated = params[0].substring(0, params[1]) + "...";
    return truncated;
  }else {
    return params[0];
  }

}

export default helper(truncateText);
