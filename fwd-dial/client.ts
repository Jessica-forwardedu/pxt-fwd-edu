namespace fwdSensors {
  export const enum dialDirection {
    //% block="↻"
    cw,
    //% block="↺"
    ccw
  }

  /**
   * Wrapper for FWD Edu rotary encoder, aka "Dial"
   **/
  //% fixedInstances
  export class FwdEduDialClient extends modules.RotaryEncoderClient {
    private _cwAction: (delta: number) => void
    private _ccwAction: (delta: number) => void

    constructor(role: string) {
      super(role)

      this._cwAction = (_) => {}
      this._ccwAction = (_) => {}

      this.onReadingChangedBy(1, (delta) => {
        if (delta < 0) {
          this._cwAction(delta)
        } else {
          this._ccwAction(delta)
        }
      })

    }
    
    //% group="Dial"
    //% block="%dial clicks per full turn"
    //% blockId=fwd_dial_get_clicks_per_turn
    clicksPerTurn(): number { return this.clicksPerTurn() }
    
    //% group="Dial"
    //% block="%dial absolute position"
    //% blockId=fwd_dial_get_position
    position(): number { return this.position() }

    /**
     * Run code when the dial is turned in a specific direction
     * @param direction 
     * @param handler handler is run when the dial is turned cw|ccw
     */
    //% group="Dial"
    //% blockId=jacdac_rotaryencoder_on_dial_turned
    //% block="on $dial turned $direction"
    //% weight=98
    onDialTurned(direction: dialDirection, handler: (delta: number) => void): void {
      if (direction === dialDirection.cw) {
        this._cwAction = handler
      } else {
        this._ccwAction = handler
      }
    }

    
  }

  //% fixedInstance whenUsed weight=1 block="dial1"
  export const dial1 = new FwdEduDialClient("dial1")
}
