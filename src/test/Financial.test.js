import {ammortamento, interessiRata, convertiTasso, rata} from '../core/Financial';

it('rata() should return the correct value', () => {
  const capitale = 90000
  const tasso = 1.85
  const durata = 300
  expect(rata(capitale, tasso, durata)).toBe(374.9308042253228)
})

it('convertiTasso() should convert 3% to 0.0025%', () => {
  expect(convertiTasso(3)).toBe(0.0025)
})

it('ammortamento() should give the correct ammortamento', () => {
  const capitale = 100
  const tasso = 1
  const durata = 2

  const expectedAmmortamento = [
    {
      debitoResiduo: 50.020824656384825,
      capitaleVersato: 49.979175343615175,
      interessiVersati: 0.08333333333333334,
      mese: 1,
      quotaCapitale: 49.979175343615175,
      quotaInteressi: 0.08333333333333334,
      rata: 50.06250867694851,
    },
    {
      debitoResiduo: -1.6697754290362354e-11,
      capitaleVersato: 100.0000000000167,
      interessiVersati: 0.1250173538803207,
      mese: 2,
      quotaCapitale: 50.02082465640152,
      quotaInteressi: 0.04168402054698735,
      rata: 50.06250867694851,
    },
  ]

  expect(ammortamento(capitale, tasso, durata)).toEqual(expectedAmmortamento)
})

it('interessiRata() should give the correct interess', () => {
  const capitale = 90000
  const tasso = 1.85
  expect(interessiRata(capitale, tasso)).toEqual(138.75000000000003)
})
