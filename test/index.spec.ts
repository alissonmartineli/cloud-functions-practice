import { getMockReq, getMockRes } from '@jest-mock/express'
import { describe, expect, it } from '@jest/globals'
import { validateTemperature } from '../src/index'

describe('Main test', () => {
  it('should return status 200 and "Temperature Ok" when temp is less than 100', async () => {
    const req = getMockReq({ body: { temp: 99 } })
    const { res } = getMockRes()

    await validateTemperature(req, res)

    expect(res.status).toBeCalledWith(200)
    expect(res.send).toBeCalledWith('Temperature OK')
  })

  it('should return status 200 and "Too hot" when temp is 100 or higher', async () => {
    const req = getMockReq({ body: { temp: 100 } })
    const { res } = getMockRes()

    await validateTemperature(req, res)

    expect(res.status).toBeCalledWith(200)
    expect(res.send).toBeCalledWith('Too hot')
  })

  it('should return status 400 and "Temp is required" when not informing the temperature', async () => {
    const req = getMockReq()
    const { res } = getMockRes()

    await validateTemperature(req, res)

    expect(res.status).toBeCalledWith(400)
    expect(res.send).toBeCalledWith('Temp is required')
  })
})
