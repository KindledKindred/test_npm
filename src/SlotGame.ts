import * as PIXI from 'pixi.js'
import UI from './UI'

export default class SlotGame {
  public static readonly width: number = 800
  public static readonly height: number = 640
  public static readonly resources: string[] = [
    './assets/chiple.png',
    './assets/kerberos.png',
    './assets/load.png',
    './assets/snaker.png',
  ]

  private app!: PIXI.Application
  private ui!: UI
  private onReady: () => void = () => { }

  constructor() {
    if (!document.body) {
      throw new Error('window is not ready')
    }
    this.app = new PIXI.Application({
      width: SlotGame.width,
      height: SlotGame.height,
      backgroundColor: 0x1099bb
    })
    document.body.appendChild(this.app.view)

    for (let i = 0; i < SlotGame.resources.length; i++) {
      const resources = SlotGame.resources[i]
      this.app.loader.add(resources)
    }

    this.app.loader.load(() => {
      this.ui = new UI()
      this.onReady()
    })
  }

  public start(): void {
    if (!this.ui) {
      this.onReady = () => this.start()
      return
    }
    this.app.stage.addChild(this.ui)
    this.app.ticker.add(() => {
      this.ui.update()
    })
  }
}