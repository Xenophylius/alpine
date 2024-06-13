import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  modelBase : [
    {name: 'pure', img: './images/model/pure.png', description: 'Blablablabla', price: 54700},
    {name: 'legende', img: './images/model/legende.png', description: 'Blablablabla', price: 58500}
  ],
  modelChoice : {name: '', color: 'blanc', jante: 'standard', sellerie: '', equipement: []},
  pricing: 0,
  pureColor : ['../images/model/pure/modele_pure-couleur_blanche-jante_standard (1).jpg', '../images/model/pure/modele_pure-couleur_blanche-jante_standard (2).jpg', '../images/model/pure/modele_pure-couleur_blanche-jante_standard (3).jpg', '../images/model/pure/modele_pure-couleur_blanche-jante_standard (4).jpg' ],
  legendeColor : ['../images/model/legende/modele_legende-couleur_blanc-jante_legende-1.jpg', '../images/model/legende/modele_legende-couleur_blanc-jante_legende-2.jpg', '../images/model/legende/modele_legende-couleur_blanc-jante_legende-3.jpg', '../images/model/legende/modele_legende-couleur_blanc-jante_legende-4.jpg' ],
  colorsImg : ['Selectionnez votre couleur', '../images/color/blanc.jpg', '../images/color/bleu.jpg', '../images/color/noir.jpg'],
  jantesImg : ['Selectionnez votre jante', '../images/jantes/jante-standard.jpg', '../images/jantes/jante-serac.jpg', '../images/jantes/jante-legende.jpg'],
  sellerieImg : ['Selectionnez votre sellerie', '../images/sellerie/cuir-brun.jpg', '../images/sellerie/cuir-noir.jpg', '../images/sellerie/cuir-noir_perfore.jpg', '../images/sellerie/cuir-noir_dinamica.jpg'],
  equipementImg : ['Selectionnez votre pack équipement', '../images/equipements/conduite.jpg', '../images/equipements/confort.jpg', '../images/equipements/design.jpg', '../images/equipements/media-nav.jpg', '../images/equipements/perso-ext.jpg', '../images/equipements/perso-int.jpg', '../images/equipements/securite.jpg'],
  ariane : [
    {link: '/configurator', title: 'Model'},
  ]
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    pushName: (state, action) => {
      state.modelChoice = {name: '', color: 'blanc', jante: 'standard', sellerie: '', equipement: []}
      state.pureColor = ['../images/model/pure/modele_pure-couleur_blanche-jante_standard (1).jpg', '../images/model/pure/modele_pure-couleur_blanche-jante_standard (2).jpg', '../images/model/pure/modele_pure-couleur_blanche-jante_standard (3).jpg', '../images/model/pure/modele_pure-couleur_blanche-jante_standard (4).jpg' ]
      state.legendeColor = ['../images/model/legende/modele_legende-couleur_blanc-jante_legende-1.jpg', '../images/model/legende/modele_legende-couleur_blanc-jante_legende-2.jpg', '../images/model/legende/modele_legende-couleur_blanc-jante_legende-3.jpg', '../images/model/legende/modele_legende-couleur_blanc-jante_legende-4.jpg' ]
      state.modelChoice.name = action.payload.name
    },
    colorChoice: (state, action) => {
      state.modelChoice.color = action.payload.color
      if (action.payload.color === 'bleu') {
        state.pureColor = ['../images/model/pure/modele_pure-couleur_bleu-jante_standard (1).jpg', '../images/model/pure/modele_pure-couleur_bleu-jante_standard (2).jpg', '../images/model/pure/modele_pure-couleur_bleu-jante_standard (3).jpg', '../images/model/pure/modele_pure-couleur_bleu-jante_standard (4).jpg' ],
        state.legendeColor = ['../images/model/legende/modele_legende-couleur_bleu-jante_legende-1.jpg', '../images/model/legende/modele_legende-couleur_bleu-jante_legende-2.jpg', '../images/model/legende/modele_legende-couleur_bleu-jante_legende-3.jpg', '../images/model/legende/modele_legende-couleur_bleu-jante_legende-4.jpg' ]
      }
      if (action.payload.color === 'blanc') {
        state.pureColor = ['../images/model/pure/modele_pure-couleur_blanche-jante_standard (1).jpg', '../images/model/pure/modele_pure-couleur_blanche-jante_standard (2).jpg', '../images/model/pure/modele_pure-couleur_blanche-jante_standard (3).jpg', '../images/model/pure/modele_pure-couleur_blanche-jante_standard (4).jpg' ]
        state.legendeColor = ['../images/model/legende/modele_legende-couleur_blanc-jante_legende-1.jpg', '../images/model/legende/modele_legende-couleur_blanc-jante_legende-2.jpg', '../images/model/legende/modele_legende-couleur_blanc-jante_legende-3.jpg', '../images/model/legende/modele_legende-couleur_blanc-jante_legende-4.jpg' ]
        
      }
      if (action.payload.color === 'noir') {
        state.pureColor = ['../images/model/pure/modele_pure-couleur_noire-jante_standard (1).jpg', '../images/model/pure/modele_pure-couleur_noire-jante_standard (2).jpg', '../images/model/pure/modele_pure-couleur_noire-jante_standard (3).jpg', '../images/model/pure/modele_pure-couleur_noire-jante_standard (4).jpg' ]
        state.legendeColor = ['../images/model/legende/modele_legende-couleur_noir-jante_legende-1.jpg', '../images/model/legende/modele_legende-couleur_noir-jante_legende-2.jpg', '../images/model/legende/modele_legende-couleur_noir-jante_legende-3.jpg', '../images/model/legende/modele_legende-couleur_noir-jante_legende-4.jpg' ]
        
      }
    },
    janteChoice: (state, action) => {
      state.modelChoice.jante = action.payload.jante
      if (state.modelChoice.color === 'blanc' && state.modelChoice.jante === 'blanc') {
        state.pureColor = ['../images/jantes/vues/couleur-blanc_jante-standard (2).jpg']
        state.legendeColor = ['../images/jantes/vues/couleur-blanc_jante-standard (2).jpg']

      }
      if (state.modelChoice.color === 'bleu' && state.modelChoice.jante === 'blanc') {
        state.pureColor = ['../images/jantes/vues/couleur-bleu_jante-standard (3).jpg']
        state.legendeColor = ['../images/jantes/vues/couleur-bleu_jante-standard (3).jpg']

      }
      if (state.modelChoice.color === 'noir' && state.modelChoice.jante === 'blanc') {
        state.pureColor = ['../images/jantes/vues/couleur-noir_jante-standard (1).jpg']
        state.legendeColor = ['../images/jantes/vues/couleur-noir_jante-standard (1).jpg']

      }
      if (state.modelChoice.color === 'blanc' && state.modelChoice.jante === 'bleu') {
        state.pureColor = ['../images/jantes/vues/couleur-blanc_jante-serac (2).jpg']
        state.legendeColor = ['../images/jantes/vues/couleur-blanc_jante-serac (2).jpg']

      }
      if (state.modelChoice.color === 'bleu' && state.modelChoice.jante === 'bleu') {
        state.pureColor = ['../images/jantes/vues/couleur-bleu_jante-serac (3).jpg']
        state.legendeColor = ['../images/jantes/vues/couleur-bleu_jante-serac (3).jpg']

      }
      if (state.modelChoice.color === 'noir' && state.modelChoice.jante === 'bleu') {
        state.pureColor = ['../images/jantes/vues/couleur-noir_jante-serac (1).jpg']
        state.legendeColor = ['../images/jantes/vues/couleur-noir_jante-serac (1).jpg']

      }
      if (state.modelChoice.color === 'blanc' && state.modelChoice.jante === 'noir') {
        state.pureColor = ['../images/jantes/vues/couleur-blanc_jante-legende (2).jpg']
        state.legendeColor = ['../images/jantes/vues/couleur-blanc_jante-legende (2).jpg']

      }
      if (state.modelChoice.color === 'bleu' && state.modelChoice.jante === 'noir') {
        state.pureColor = ['../images/jantes/vues/couleur-bleu_jante-legende (3).jpg']
        state.legendeColor = ['../images/jantes/vues/couleur-bleu_jante-legende (3).jpg']

      }
      if (state.modelChoice.color === 'noir' && state.modelChoice.jante === 'noir') {
        state.pureColor = ['../images/jantes/vues/couleur-noir_jante-legende (1).jpg']
        state.legendeColor = ['../images/jantes/vues/couleur-noir_jante-legende (1).jpg']

      }
    },
    sellerieChoice: (state, action) => {
      state.modelChoice.sellerie = action.payload.sellerie
      if (state.modelChoice.sellerie === 'cuir noir') {
        state.pureColor = ['../images/sellerie/vues/cuir-noir-1.jpg', '../images/sellerie/vues/cuir-noir-2.jpg', '../images/sellerie/vues/cuir-noir-3.jpg']
        state.legendeColor = ['../images/sellerie/vues/cuir-noir-1.jpg', '../images/sellerie/vues/cuir-noir-2.jpg', '../images/sellerie/vues/cuir-noir-3.jpg']
      }
      if (state.modelChoice.sellerie === 'cuir brun') {
        state.pureColor = ['../images/sellerie/vues/cuir-brun-1.jpg', '../images/sellerie/vues/cuir-brun-2.jpg', '../images/sellerie/vues/cuir-brun-3.jpg']
        state.legendeColor = ['../images/sellerie/vues/cuir-brun-1.jpg', '../images/sellerie/vues/cuir-brun-2.jpg', '../images/sellerie/vues/cuir-brun-3.jpg']
      }
      if (state.modelChoice.sellerie === 'perfore') {
        state.pureColor = ['../images/sellerie/vues/cuir-noir_perfore-1.jpg', '../images/sellerie/vues/cuir-noir_perfore-2.jpg', '../images/sellerie/vues/cuir-noir_perfore-3.jpg']
        state.legendeColor = ['../images/sellerie/vues/cuir-noir_perfore-1.jpg', '../images/sellerie/vues/cuir-noir_perfore-2.jpg', '../images/sellerie/vues/cuir-noir_perfore-3.jpg']
      }
      if (state.modelChoice.sellerie === 'dinamica') {
        state.pureColor = ['../images/sellerie/vues/cuir-noir_dinamica-1.jpg', '../images/sellerie/vues/cuir-noir_dinamica-2.jpg', '../images/sellerie/vues/cuir-noir_dinamica-3.jpg']
        state.legendeColor = ['../images/sellerie/vues/cuir-noir_dinamica-1.jpg', '../images/sellerie/vues/cuir-noir_dinamica-2.jpg', '../images/sellerie/vues/cuir-noir_dinamica-3.jpg']
      }
      
    },
    equipementChoice: (state, action) => {
      state.modelChoice.equipement = action.payload.equipement
          
      if (state.modelChoice.equipement === 'conduite') {
        state.pureColor = ['../images/equipements/conduite/aide-stationnement-ar.jpg', '../images/equipements/conduite/aide-stationnement-av-ar.jpg', '../images/equipements/conduite/camera-recul.jpg', '../images/equipements/conduite/echappement-sport.jpg']
        state.legendeColor = state.pureColor
      }  
      if (state.modelChoice.equipement === 'confort') {
        state.pureColor = ['../images/equipements/confort/pack-rangement.jpg', '../images/equipements/confort/regul-limit-vitesse.jpg', '../images/equipements/confort/retro-ext-chaffant.jpg', '../images/equipements/confort/retro-int-electrochrome.jpg']
        state.legendeColor = state.pureColor
      } 
      if (state.modelChoice.equipement === 'design') {
        state.pureColor = ['../images/equipements/design/pack-heritage.jpg', '../images/equipements/design/repose-pied-alu.jpg']
        state.legendeColor = state.pureColor
      } 
      if (state.modelChoice.equipement === 'media-nav') {
        state.pureColor = ['../images/equipements/media-nav/alpine-metrics.jpg', '../images/equipements/media-nav/audio-focal.jpg', '../images/equipements/media-nav/audio-premium.jpg', '../images/equipements/media-nav/audio-standard.jpg']
        state.legendeColor = state.pureColor
      } 
      if (state.modelChoice.equipement === 'perso-ext') {
        state.pureColor = ['../images/equipements/perso-ext/etrier-bleu.jpg', '../images/equipements/perso-ext/etrier-gris.jpg', '../images/equipements/perso-ext/logo-alpine.jpg']
        state.legendeColor = state.pureColor
      } 
      if (state.modelChoice.equipement === 'perso-int') {
        state.pureColor = ['../images/equipements/perso-int/logo-volant.jpg', '../images/equipements/perso-int/pack-carbone.jpg', '../images/equipements/perso-int/pedal-alu.jpg', '../images/equipements/perso-int/siege-chauffant.jpg']
        state.legendeColor = state.pureColor
      } 
      if (state.modelChoice.equipement === 'securite') {
        state.pureColor = ['../images/equipements/securite/aide-freinage-durgence.jpg', '../images/equipements/securite/airbag.jpg', '../images/equipements/securite/freinage-haute-perf.jpg']
        state.legendeColor = state.pureColor
      } 

    },
    countEquipement: (state, action) => {      
      let equipementSelect = document.querySelectorAll('.activeItem')
      let arrayEquipement = []
      equipementSelect.forEach((element) => {
        arrayEquipement.push(element.id)
      })
      state.modelChoice.equipement = arrayEquipement
    },
    calculPricing: (state, action) => {    
      state.pricing = 0  
      if (state.modelChoice.name === 'pure') {
        state.pricing = state.pricing + 54700
      } 
      if (state.modelChoice.name === 'legende') {
        state.pricing = state.pricing + 58500
      } 
      if (state.modelChoice.color === 'bleu') {
        state.pricing = state.pricing + 1800
      } 
      if (state.modelChoice.color === 'noir') {
        state.pricing = state.pricing + 840
      } 
      if (state.modelChoice.jante === 'bleu') {
        state.pricing = state.pricing + 1000
      } 
      if (state.modelChoice.sellerie === 'perfore') {
        state.pricing = state.pricing + 800
      } 
      if (state.modelChoice.sellerie === 'cuir brun') {
        state.pricing = state.pricing + 800
      } 
      if (state.modelChoice.equipement === 'design') {
        state.pricing = state.pricing + 276
      } 
      if (state.modelChoice.equipement === 'media-nav') {
        state.pricing = state.pricing + 2004
      } 
      if (state.modelChoice.equipement === 'confort') {
        state.pricing = state.pricing + 1008
      } 
      if (state.modelChoice.equipement === 'conduite') {
        state.pricing = state.pricing + 3870
      } 
      if (state.modelChoice.equipement === 'securite') {
        state.pricing = state.pricing + 1000
      } 
      if (state.modelChoice.equipement === 'perso-ext') {
        state.pricing = state.pricing + 504
      } 
      if (state.modelChoice.equipement === 'perso-int') {
        state.pricing = state.pricing + 604
      } 
    },
    pushAriane: (state, action) => {    
      const array = state.ariane
      const resultat = array.find((element) => element.title === action.payload.title)
      if (resultat === undefined) {
      state.ariane.push({link: action.payload.link, title: action.payload.title})
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { pushName, colorChoice, janteChoice, sellerieChoice, equipementChoice, countEquipement, calculPricing, pushAriane} = counterSlice.actions

export default counterSlice.reducer