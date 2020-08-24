import { action, observable } from 'mobx'
import { autobind } from 'core-decorators'
import WebinarInfoRepository from './WebinarInfoRepository'

@autobind
class WebinarInfoStore {
  @observable link = ''
  @observable title = ''
  @observable detail = ''
  @action
  async getWebinarInfo() {
    const response = await WebinarInfoRepository.getWebinarInfo()
    this.link = response.data.link
    this.title = response.data.title
    this.detail = response.data.detail
    return response
  }
}

export default WebinarInfoStore
