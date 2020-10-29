import BaseActions from '../util/baseAction'
// eslint-disable-next-line
import { observable, action } from 'mobx'
import * as urls from '../constant/urls'



class User extends BaseActions {

  @action
  async getProjList() {
    return await this.get(urls.API_SYS_GET_PROJLIST,{})
  }

}

export default new User({})