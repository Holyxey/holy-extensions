import './assets/CookiesModal.css'
import { createApp } from 'vue'

import type { CookiesModalOptions } from './types'
import CookiesModal from './CookiesModal.vue'

const defaultCookieModalOptions: CookiesModalOptions = {
  title: 'Мы используем cookie',
  description: 'Продолжая пользоваться сайтом, вы соглашаетесь с Политикой конфиденциальности',
  backgroundColor: '#FFFFFF',
  textColor: '#555555',
  accentColor: '#d83d78',
  fontFamily: 'Jost',
  policyAcceptText: 'Принять',
  policyLink: '/policy',
  policyOpenText: 'Открыть документ',
}

export const holyxeyModal = {
  set(options: Partial<CookiesModalOptions>) {
    const config = {
      ...defaultCookieModalOptions,
      ...options,
    }
    const modalContainer = document.createElement('div')
    document.body.appendChild(modalContainer)

    const appInstance = createApp(CookiesModal, config)
    appInstance.mount(modalContainer)
  },
}

export default holyxeyModal

window.holyxeyModal = holyxeyModal
