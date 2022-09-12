import {ammortamento, interessiRata, convertiTasso, rata} from '../core/Financial';

it('rata() should return the correct value', () => {
  const capitale = 90000
  const tasso = 1.85
  const durata = 300
  expect(rata(capitale, tasso, durata)).toBe(374.9308042253166)
})

it('convertiTasso() should convert 3% to 0.0025%', () => {
  expect(convertiTasso(3)).toBe(0.0025)
})

it('ammortamento() should give the correct ammortamento', () => {
  const capitale = 100
  const tasso = 1
  const durata = 2

  const expectedAmmortamento = [{
    "capitaleVersato": 49.979175343611836,
    "date": "Invalid date",
    "debitoResiduo": 50.020824656388164,
    "estinzione": 0,
    "interessiVersati": 0.08333333333333334,
    "mese": 1,
    "quotaCapitale": 49.979175343611836,
    "quotaInteressi": 0.08333333333333334,
    "rata": 50.06250867694517,
    "risparmioEstinzione": 0
  },
    {
      "capitaleVersato": 100.00000000001002,
      "date": "Invalid date",
      "debitoResiduo": -1.0018652574217413e-11,
      "estinzione": 0,
      "interessiVersati": 0.12501735388032348,
      "mese": 2,
      "quotaCapitale": 50.02082465639818,
      "quotaInteressi": 0.04168402054699014,
      "rata": 50.06250867694517,
      "risparmioEstinzione": 0
    }
  ]

  const today = new Date();

  const estinzioni = [];

  expect(ammortamento({capitale, tasso, durata, today, estinzioni})).toEqual(expectedAmmortamento)
})

it('interessiRata() should give the correct interess', () => {
  const capitale = 90000
  const tasso = 1.85
  expect(interessiRata(capitale, tasso)).toEqual(138.75000000000003)
})
