/**
 * # ===============================================
# PSEUDO-CODE : CALCUL DES FRAIS KILOMÉTRIQUES
# Système de tarification avec réduction par passager
# ===============================================

"""
PROBLÈME À RÉSOUDRE :
- Calculer les frais kilométriques selon le nombre de passagers
- Tarif de base : 0,6 € par kilomètre
- Réduction : 0,5 € par passager (sur le total)
- Afficher le montant total ET le prix par passager
"""

# ===============================================
# ANALYSE DES RÈGLES DE TARIFICATION
# ===============================================

"""
RÈGLES DE CALCUL :
*/ 
/*
TARIF DE BASE :
- 0,6 € par kilomètre parcouru

RÉDUCTION PAR PASSAGER :
- 0,5 € de réduction par passager (sur le montant total)

FORMULE :
- Coût total = (nb_kilometres × 0,6) - (nb_passagers × 0,5)
- Prix par passager = Coût total ÷ nb_passagers

EXEMPLES :
- 100 km, 2 passagers : (100 × 0,6) - (2 × 0,5) = 60 - 1 = 59 €
  Prix par passager : 59 ÷ 2 = 29,50 €

- 50 km, 4 passagers : (50 × 0,6) - (4 × 0,5) = 30 - 2 = 28 €
  Prix par passager : 28 ÷ 4 = 7,00 €

ATTENTION :
- Si réduction > coût de base, le prix minimum doit être géré
- Division par zéro si aucun passager
"""

# ===============================================
# PSEUDO-CODE PRINCIPAL
# ===============================================

ALGORITHME CalculerFraisKilometriques*/
function CalculerFraisKilometriques(nb_kilometres, nb_passagers){

/*ENTRÉES:
    nb_kilometres : réel (nombre de kilomètres parcourus)
    nb_passagers : entier (nombre de passagers dans le véhicule)*/
  /* let nb_kilometres ;
    let nb_passagers  ;
    */
/*
VARIABLES:
    cout_base : réel (coût sans réduction)
    reduction_totale : réel (réduction appliquée)
    cout_total : réel (coût final après réduction)
    prix_par_passager : réel (part de chaque passager)*/
    let cout_base ;
    let reduction_totale ;
    let cout_total;
    let prix_par_passager;
/*
CONSTANTES:
    TARIF_BASE_KM : réel ← 0.6 (tarif de base par kilomètre)
    REDUCTION_PAR_PASSAGER : réel ← 0.5 (réduction par passager)
*/
    const TARIF_BASE_KM= 0.6;
    const REDUCTION_PAR_PASSAGER = 0.5;
/*
DÉBUT
    AFFICHER "=== CALCUL DES FRAIS KILOMÉTRIQUES ==="
    AFFICHER "Nombre de kilomètres :", nb_kilometres, "km"
    AFFICHER "Nombre de passagers :", nb_passagers
    */
    console.log("=== CALCUL DES FRAIS KILOMETRIQUES ===");
    console.log(`Nombre de kilomètres : ${nb_kilometres}`);
    console.log(`Nombre de passagers : ${nb_passagers}`);

    /*
    // Étape 1: Validation des données d'entrée
    AFFICHER "--- Validation des données ---"
    */
    console.log("--- Validation des données ---");
    /*
    SI nb_kilometres < 0 ALORS
        AFFICHER "Erreur : Le nombre de kilomètres ne peut pas être négatif"
        RETOURNER "ERREUR_KILOMETRES_NEGATIFS"
    FIN SI
    SI nb_passagers <= 0 ALORS
        AFFICHER "Erreur : Il doit y avoir au moins un passager"
        RETOURNER "ERREUR_AUCUN_PASSAGER"
    FIN SI
    
    SI nb_passagers > 10 ALORS
        AFFICHER "Attention : Nombre de passagers très élevé (", nb_passagers, ")"
        AFFICHER "Vérifiez la capacité du véhicule"
    FIN SI
    */
    if (nb_kilometres < 0){
        console.log("Erreur : Le nombre de kilomètres ne peut pas être négatif");
        return "ERREUR_KILOMETRES_NEGATIFS";
    }
    if (nb_passagers <= 0){
        console.log("Erreur : Il doit y avoir au moins un passager");
        return "ERREUR_AUCUN_PASSAGER";
    }
    if ( nb_passagers > 10){
        console.log(`Attention : Nombre de passagers très élevé, ${nb_passagers},`);
    }
    /*
    AFFICHER "Données validées avec succès"
    */
    console.log("Données validées avec succès")
    /*
    // Étape 2: Calcul du coût de base
    AFFICHER "--- Calcul du coût de base ---"
    cout_base ← nb_kilometres × TARIF_BASE_KM
    AFFICHER "Coût de base :", nb_kilometres, "km ×", TARIF_BASE_KM, "€/km =", cout_base, "€"
    */
    console.log("--- Calcul du coût de base ---");
    cout_base = nb_kilometres * TARIF_BASE_KM;
    console.log(`Coût de base :, ${nb_kilometres}, km x, ${TARIF_BASE_KM}, €/km, ${cout_base}, €`);

    /*
    // Étape 3: Calcul de la réduction
    AFFICHER "--- Calcul de la réduction ---"
    reduction_totale ← nb_passagers × REDUCTION_PAR_PASSAGER
    AFFICHER "Réduction totale :", nb_passagers, "passagers ×", REDUCTION_PAR_PASSAGER, "€ =", reduction_totale, "€"
    */
    console.log("--- Calcul de la réduction ---");
    reduction_totale = nb_passagers * REDUCTION_PAR_PASSAGER;
    console.log(`Réduction totale :, ${nb_passagers}, passagers x, ${REDUCTION_PAR_PASSAGER}, € =, ${reduction_totale}, €`);
    
    /*
    // Étape 4: Calcul du coût total après réduction
    AFFICHER "--- Calcul du coût total ---"
    cout_total ← cout_base - reduction_totale
    */
    console.log("--- Calcul du coût total ---");
    cout_total = cout_base - reduction_totale;
    /*
    // Vérification que le coût ne devient pas négatif
    SI cout_total < 0 ALORS
        AFFICHER "Attention : La réduction dépasse le coût de base"
        AFFICHER "Coût calculé négatif :", cout_total, "€"
        AFFICHER "Application d'un coût minimum de 0,00 €"
        cout_total ← 0.00
    FIN SI
    */
    if (cout_total < 0){
        console.log("Attention : La réduction dépasse le coût de base");
        console.log(`Coût calculé négatif :, ${cout_total}, €`);
        console.log("Application d'un coût minimum de 0,00 €");
        cout_total = 0;
    }
    /*
    AFFICHER "Coût total après réduction :", cout_base, "€ -", reduction_totale, "€ =", cout_total, "€"
    */
    console.log("--- Calcul du coût total ---");
    cout_total = cout_base - reduction_totale;

    if (cout_total < 0){
        console.log("Attention : La réduction dépasse le coût de base");
        console.log(`Coût totale après réduction : ${cout_base}, € -, ${reduction_totale}, € =, ${cout_total}, €`);
    }
    console.log (`Coût totale après réduction : ${cout_base}, € -`);
    /*
    // Étape 5: Calcul du prix par passager
    AFFICHER "--- Calcul du prix par passager ---"
    prix_par_passager ← cout_total / nb_passagers
    AFFICHER "Prix par passager :", cout_total, "€ ÷", nb_passagers, "=", prix_par_passager, "€"
    */
    console.log("--- Calcul du prix par passager ---"); 
    prix_par_passager = cout_total / nb_passagers;
    console.log(`Prix par passager :, ${cout_total}, € /, ${nb_passagers}, =, ${prix_par_passager}`);
    /*
    // Étape 6: Affichage du résultat final
    AFFICHER "--- Résultat final ---"
    AFFICHER "Montant total des frais :", cout_total, "€"
    AFFICHER "Prix par passager :", prix_par_passager, "€"
    */
   console.log("--- Résultat final ---");
   console.log(`Montant total des frais :, ${cout_total}, €`);
   console.log(`Prix par passager`)

    /*
    // Retour d'un objet avec les résultats
    RETOURNER {total: cout_total, par_passager: prix_par_passager}
    
FIN

 */}