/* # ===============================================
# PSEUDO-CODE : CALCUL DU PRIX DES PHOTOCOPIES
# Système de tarification par paliers dégressifs
# ===============================================

"""
PROBLÈME À RÉSOUDRE :
- Calculer le prix total de n photocopies selon une tarification dégressive
- Palier 1 : 10 premières copies à 0,10 € chacune
- Palier 2 : 20 suivantes (11 à 30) à 0,09 € chacune  
- Palier 3 : Au-delà de 30 copies à 0,08 € chacune
- Afficher le prix total avec détail du calcul
"""

# ===============================================
# ANALYSE DES RÈGLES DE TARIFICATION
# ===============================================

"""
RÈGLES DE CALCUL :

PALIER 1 (1 à 10 copies) : 0,10 € par copie
- Si n ≤ 10 : prix = n × 0,10 €

PALIER 2 (11 à 30 copies) : 0,09 € par copie
- Si 10 < n ≤ 30 : prix = (10 × 0,10) + ((n-10) × 0,09)

PALIER 3 (31+ copies) : 0,08 € par copie  
- Si n > 30 : prix = (10 × 0,10) + (20 × 0,09) + ((n-30) × 0,08)

EXEMPLES :
- 5 copies : 5 × 0,10 = 0,50 €
- 15 copies : (10 × 0,10) + (5 × 0,09) = 1,00 + 0,45 = 1,45 €
- 35 copies : (10 × 0,10) + (20 × 0,09) + (5 × 0,08) = 1,00 + 1,80 + 0,40 = 3,20 €
"""

# ===============================================
# PSEUDO-CODE PRINCIPAL
# ===============================================

ALGORITHME CalculerPrixPhotocopies
*/
function CalculerPrixPhotocopies(n) {
    /*
    ENTRÉES:
        n : entier (nombre de photocopies demandées)
      // VARIABLES:
      */
    let prix_total; //: réel (prix total à payer)
    let prix_palier1; //: réel (coût du palier 1)
    let prix_palier2; //: réel (coût du palier 2)
    let prix_palier3; //: réel (coût du palier 3)
    let copies_palier1; //: entier (nombre de copies dans le palier 1)
    let copies_palier2; //: entier (nombre de copies dans le palier 2)
    let copies_palier3; //: entier (nombre de copies dans le palier 3)

    //CONSTANTES:
    const TARIF_PALIER1 = 0.1; //(prix des 10 premières copies)
    const TARIF_PALIER2 = 0.09; //(prix des 20 suivantes)
    const TARIF_PALIER3 = 0.08; // (prix au-delà de 30)
    const SEUIL_PALIER1 = 10;
    const SEUIL_PALIER2 = 30;

    // DÉBUT
    console.log("=== CALCUL DU PRIX DES PHOTOCOPIES ===");
    console.log("Nombre de photocopies demandées :", n);

    // Étape 1: Validation des données d'entrée
    console.log("--- Validation des données ---");
    if (n < 0) {
        console.log("Erreur : Le nombre de photocopies ne peut pas être négatif");
        return "ERREUR_NOMBRE_NEGATIF";
    }

    if (n === 0) {
        console.log("Aucune photocopie demandée");
        console.log("Prix total : 0,00 €");
        return 0.0;
    }

    console.log("Données validées avec succès");


    // Étape 2: Initialisation des variables
    prix_total = 0.0;
    prix_palier1 = 0.0;
    prix_palier2 = 0.0;
    prix_palier3 = 0.0;
    copies_palier1 = 0;
    copies_palier2 = 0;
    copies_palier3 = 0;

    console.log("--- Calcul détaillé par paliers ---");

    // Étape 3: Calcul du palier 1 (1 à 10 copies à 0,10 €)
    if (n > 0) {
        if (n <= SEUIL_PALIER1) {
            copies_palier1 = n;
        } else {
            copies_palier1 = SEUIL_PALIER1;
        }

        prix_palier1 = copies_palier1 * TARIF_PALIER1;
        prix_total = prix_total + prix_palier1;

        console.log(
            `Palier 1 : ${copies_palier1} copies x ${TARIF_PALIER1} € = ${prix_palier1.toFixed(
                2
            )} €`
        );
    }
 // Étape 4: Calcul du palier 2 (11 à 30 copies à 0,09 €)
  if (n > SEUIL_PALIER1) {
    if (n <= SEUIL_PALIER2) {
      copies_palier2 = n - SEUIL_PALIER1;
    } else {
      copies_palier2 = SEUIL_PALIER2 - SEUIL_PALIER1;
    }

    prix_palier2 = copies_palier2 * TARIF_PALIER2;
    prix_total = prix_total + prix_palier2;

    console.log(
      `Palier 2 : ${copies_palier2} copies ×  ${TARIF_PALIER2} € = ${prix_palier2.toFixed(
        2
      )} €`
    );
  }

  // Étape 5: Calcul du palier 3 (31+ copies à 0,08 €)
  if (n > SEUIL_PALIER2) {
    copies_palier3 = n - SEUIL_PALIER2;
    prix_palier3 = copies_palier3 * TARIF_PALIER3;
    prix_total = prix_total + prix_palier3;

    console.log(
      `Palier 3 : ${copies_palier3} copies × ${TARIF_PALIER3} € = ${prix_palier3.toFixed(
        2
      )} €`
    );
  }

  // Étape 6: Affichage du résultat final
  console.log("--- Résultat final ---");
  console.log(`Prix total pour  ${n} photocopies : ${prix_total.toFixed(2)} €`);

  return prix_total;
}
CalculerPrixPhotocopies(46785);
