/**
 * # ===============================================
# PSEUDO-CODE : POLICE D'ASSURANCE AUTOMOBILE
# Calcul du tarif selon les caractéristiques du conducteur
# ===============================================

"""
PROBLÈME À RÉSOUDRE :
- Déterminer le tarif d'assurance (A, B, C, D) ou refus
- Critères : âge, ancienneté permis, nombre d'accidents, fidélité
- Tarifs : A (le moins cher) < B < C < D (le plus cher)
- Bonus fidélité : -1 niveau si assuré depuis > 1 an
"""

# ===============================================
# ANALYSE DES RÈGLES MÉTIER
# ===============================================

"""
RÈGLES DE TARIFICATION :

1. CONDUCTEUR < 25 ANS + PERMIS < 2 ANS :
   - 0 accident : Tarif D
   - ≥ 1 accident : REFUSÉ

2. CONDUCTEUR < 25 ANS + PERMIS ≥ 2 ANS :
   OU CONDUCTEUR ≥ 25 ANS + PERMIS < 2 ANS :
   - 0 accident : Tarif C
   - 1 accident : Tarif D
   - ≥ 2 accidents : REFUSÉ

3. CONDUCTEUR ≥ 25 ANS + PERMIS ≥ 2 ANS :
   - 0 accident : Tarif B
   - 1 accident : Tarif C
   - 2 accidents : Tarif D
   - ≥ 3 accidents : REFUSÉ

4. BONUS FIDÉLITÉ :
   - Si assuré depuis > 1 an : tarif immédiatement inférieur
   - D → C, C → B, B → A
   - Ne s'applique pas si déjà refusé
"""

# ===============================================
# PSEUDO-CODE PRINCIPAL SIMPLIFIÉ
# ===============================================

ALGORITHME CalculerTarifAssurance

ENTRÉES:
    age : entier (âge du conducteur)
    anciennete_permis : entier (années depuis l'obtention du permis)
    nb_accidents : entier (nombre d'accidents responsables)
    assure_depuis : entier (années d'assurance dans la compagnie, 0 si nouveau client)
*/
function calculpoliceassurance(age, anciennete_permis, nb_accidents, assure_depuis){
/*let age = 23;
let anciennete_permis= 1;
let nb_accidents= 1;
let assure_depuis= 2;*/

/*
VARIABLES:
    tarif_base : chaîne de caractères (tarif calculé avant bonus)
    tarif_final : chaîne de caractères (tarif final avec bonus éventuel)
    est_fidele : booléen (vrai si assuré depuis plus d'un an)
*/
let tarif_base= "D";
let tarif_final= "C";
let est_fidele= true;
/*
CONSTANTES:
    TARIFS : tableau de chaînes ← ["A", "B", "C", "D"]
    REFUS : chaîne ← "REFUSÉ"
*/
const TARIFS= ["A", "B", "C", "D"];
const REFUS= "REFUSÉ";

/*
DÉBUT
    AFFICHER "=== CALCUL DU TARIF D'ASSURANCE ==="
    AFFICHER "Âge :", age, "ans"
    AFFICHER "Ancienneté permis :", anciennete_permis, "ans"
    AFFICHER "Nombre d'accidents :", nb_accidents
    AFFICHER "Assuré depuis :", assure_depuis, "ans"
    */
    console.log("===CALCUL DU TARIF D' ASSURANCE===")
    console.log("Age :", age, "ans")
    console.log("Ancienneté permis", anciennete_permis, "ans")
    console.log("Nombre d'accidents :", nb_accidents)
    console.log("Assuré depuis : ", assure_depuis, "ans")

    /*
    // Étape 1: Validation des données d'entrée
    AFFICHER "--- Validation des données ---"
    SI (age < 16) OU (age > 120) ALORS
        AFFICHER "Erreur : Âge invalide"
        RETOURNER "ERREUR_AGE"
    FIN SI
    */
    if (age < 16 || age > 120){
        console.log("Erreur : Âge invalide")
        return("ERREUR_AGE")
    }
    /*
    SI (anciennete_permis < 0) OU (anciennete_permis > age - 16) ALORS
        AFFICHER "Erreur : Ancienneté permis invalide"
        RETOURNER "ERREUR_PERMIS"
    FIN SI
    */
    if (anciennete_permis < 0 || anciennete_permis > age - 16){
        console.log("Erreur : Ancienneté permis invalide")
        return("ERREUR_PERMIS")
    }
    /*
    SI (nb_accidents < 0) ALORS
        AFFICHER "Erreur : Nombre d'accidents invalide"
        RETOURNER "ERREUR_ACCIDENTS"
    FIN SI
    */
    else if (nb_accidents < 0){
        console.log("Erreur : Nombre d'accidents invalide")
        return("ERREUR_ACCIDENTS")
    }
    /*
    SI (assure_depuis < 0) ALORS
        AFFICHER "Erreur : Ancienneté assurance invalide"
        RETOURNER "ERREUR_ASSURANCE"
    FIN SI
    */
    else if (assure_depuis < 0){
        console.log("Erreur : Ancienneté assurance invalide")
        return("ERREUR_ASSURANCE")
    }

    /*
    AFFICHER "Données validées avec succès"
    */
    else console.log("Données validées avec succès")
    /*

    // Étape 2: Calcul direct du tarif selon le profil
    AFFICHER "--- Calcul du tarif de base ---"
    */
    console.log("Calcul du tarif de base")
    /*
    
    // CAS 1: Jeune conducteur inexpérimenté (< 25 ans ET permis < 2 ans)
    SI (age < 25) ET (anciennete_permis < 2) ALORS
        AFFICHER "Profil : Jeune conducteur inexpérimenté"
        
        SI nb_accidents = 0 ALORS
            AFFICHER "Aucun accident : tarif D autorisé"
            tarif_base ← "D"
        SINON
            AFFICHER "Au moins un accident : refus obligatoire"
            tarif_base ← "REFUSÉ"
        FIN SI
    */
    if (age < 25 && anciennete_permis < 2){
        console.log("Profil : jeune conducteur inexperimenté")
    }   if (nb_accidents === 0){
        console;log("Aucun accident : tarif D autorisé")
        tarif_base = "D"} 
        else if (console.log("Au moiuns un accident : refus obligatoire"))
        tarif_base = "REFUSÉ"
    
         
     /*   
    // CAS 2: Conducteur à risque modéré
    // (< 25 ans ET permis >= 2 ans) OU (>= 25 ans ET permis < 2 ans)
    SINON SI ((age < 25) ET (anciennete_permis >= 2)) OU 
             ((age >= 25) ET (anciennete_permis < 2)) ALORS
        AFFICHER "Profil : Conducteur avec un facteur de risque"
        
        SI nb_accidents = 0 ALORS
            AFFICHER "Aucun accident : tarif C autorisé"
            tarif_base ← "C"
        SINON SI nb_accidents = 1 ALORS
            AFFICHER "Un accident : tarif D autorisé"
            tarif_base ← "D"
        SINON
            AFFICHER "Trop d'accidents (", nb_accidents, ") : refus"
            tarif_base ← "REFUSÉ"
        FIN SI
    */
    if (age < 25 && anciennete_permis >= 2 || age >= 25 && anciennete_permis < 2){
        console.log("Profil : Conducteur avec un facteur de risque")
    }   if (nb_accidents = 0){
            console.log("Aucun accident : tarif C autorisé")
            tarif_base = "C"    
    }   else if (nb_accidents === 1){
            console.log("Un accident : tarif D autorisé")
            tarif_base = "D"
    }   else console.log("Trop d'accident (", nb_accidents, ") :refus")
             tarif_base = "REFUSÉ"
        
    /*
    // CAS 3: Conducteur expérimenté (>= 25 ans ET permis >= 2 ans)
    SINON
        AFFICHER "Profil : Conducteur expérimenté"
        
        SI nb_accidents = 0 ALORS
            AFFICHER "Aucun accident : tarif B autorisé"
            tarif_base ← "B"
        SINON SI nb_accidents = 1 ALORS
            AFFICHER "Un accident : tarif C autorisé"
            tarif_base ← "C"
        SINON SI nb_accidents = 2 ALORS
            AFFICHER "Deux accidents : tarif D autorisé"
            tarif_base ← "D"
        SINON
            AFFICHER "Trop d'accidents (", nb_accidents, ") : refus"
            tarif_base ← "REFUSÉ"
        FIN SI
    FIN SI
    */
     console.log("Profil : Conducteur experimenté")
      if (nb_accidents === O){
            console.log("Aucun accident : tarif B autorisé")
            tarif = "B"}
        else if (nb_accidents ===1){
            console.log("un accident : tarif C autorisé")
            tarif = "C"
        }
        else if (nb_accidents ===2){
            console.log("deux acciedents : tarif D autorisé")
            tarif = "D"
        }
        else 
            console.log("Trop d'accidents (", nb_accidents, ") : refus")    
           

    /*
    
    AFFICHER "Tarif de base calculé :", tarif_base
    */
    console.log("Tarif de base calculé :", tarif_base)
    /*

    // Étape 3: Application directe du bonus fidélité
    AFFICHER "--- Application bonus fidélité ---"
    est_fidele ← (assure_depuis > 1)
    */
    console.log("--- Application bon us fidelité ---")
    est_fidele > 1
    /*
    SI est_fidele ET (tarif_base ≠ "REFUSÉ") ALORS
        AFFICHER "Client fidèle détecté (assuré depuis", assure_depuis, "ans)"
        AFFICHER "Application du bonus fidélité sur tarif :", tarif_base
        
        SI tarif_base = "D" ALORS
            AFFICHER "Amélioration D → C"
            tarif_final ← "C"
        SINON SI tarif_base = "C" ALORS
            AFFICHER "Amélioration C → B"
            tarif_final ← "B"
        SINON SI tarif_base = "B" ALORS
            AFFICHER "Amélioration B → A"
            tarif_final ← "A"
        SINON SI tarif_base = "A" ALORS
            AFFICHER "Déjà au meilleur tarif"
            tarif_final ← "A"
        SINON
            AFFICHER "Tarif non reconnu, pas de bonus"
            tarif_final ← tarif_base
        FIN SI
    */
    if (est_fidele > 1 && tarif_base !== "REFUSÉ"){
        console.log("Amélioration D vers C")
        tarif_final = "C"
        if (tarif_base = "D"){
            tarif_final = "C"
        }
        else if (tarif_base = "C"){
            tarif_final = "B"
        }
        else if (tarif_base = "B"){
            tarif_final = "A"
        }
        else 
            console.log("Tarif non reconnu, pas de bonus")
            tarif_final = tarif_base
    }
} 
    /*    
    SINON
        SI tarif_base = "REFUSÉ" ALORS
            AFFICHER "Pas de bonus sur un refus"
        SINON
            AFFICHER "Pas de bonus fidélité (assuré depuis", assure_depuis, "ans)"
        FIN SI
        tarif_final ← tarif_base
    FIN SI
    
    // Étape 4: Résultat final
    AFFICHER "--- Résultat final ---"
    AFFICHER "Tarif proposé :", tarif_final
    
    RETOURNER tarif_final

FIN


# ===============================================
# ANALYSE DE COMPLEXITÉ ET SPÉCIFICATIONS
# ===============================================

"""
COMPLEXITÉ :
- Temporelle : O(1) - nombre fixe de conditions à évaluer
- Spatiale : O(1) - variables de taille constante

SPÉCIFICATIONS FONCTIONNELLES :

FONCTION : CalculerTarifAssurance(age, anciennete_permis, nb_accidents, assure_depuis)

PRÉCONDITIONS :
- age ≥ 16 et age ≤ 120
- anciennete_permis ≥ 0 et anciennete_permis ≤ (age - 16)
- nb_accidents ≥ 0
- assure_depuis ≥ 0

POSTCONDITIONS :
- Retourne "A", "B", "C", "D" ou "REFUSÉ"
- Respecte les règles métier de la compagnie
- Applique le bonus fidélité si applicable

CAS DE TEST PRINCIPAUX :

| Âge | Permis | Accidents | Assuré | Attendu | Description                    |
|-----|--------|-----------|--------|---------|--------------------------------|
| 20  | 1      | 0         | 0      | D       | Jeune inexpérimenté, 0 acc.   |
| 22  | 1      | 1         | 0      | REFUSÉ  | Jeune inexpérimenté, 1 acc.   |
| 23  | 3      | 0         | 0      | C       | Jeune expérimenté, 0 acc.     |
| 30  | 1      | 1         | 0      | D       | Adulte inexpérimenté, 1 acc.  |
| 35  | 10     | 0         | 0      | B       | Expérimenté, 0 acc.           |
| 35  | 10     | 0         | 3      | A       | Expérimenté + bonus fidélité  |
| 40  | 15     | 3         | 0      | REFUSÉ  | Trop d'accidents              |

GESTION D'ERREURS :
- Données invalides : codes d'erreur spécifiques
- Validation complète des entrées
- Messages d'erreur explicites
"""

# ===============================================
# DIAGRAMME DE DÉCISION (ARBRE)
# ===============================================

"""
ARBRE DE DÉCISION :

                        [DÉBUT]
                           |
                   [Validation données]
                           |
                     [Âge < 25 ?]
                      /         \
                   OUI             NON
                    |               |
            [Permis < 2 ?]    [Permis < 2 ?]
             /         \       /         \
          OUI           NON  OUI         NON
           |             |    |           |
    [0 acc: D]    [Âge < 25]  |    [Expérimenté]
    [≥1 acc: REF]      |      |           |
                       |      |      [0: B, 1: C,
                    [0: C]    |       2: D, ≥3: REF]
                    [1: D]    |
                    [≥2: REF] |
                              |
                         [Même règles
                          que jeune
                          expérimenté]
                              |
                        [Bonus fidélité ?]
                           /         \
                        OUI           NON
                         |             |
                   [Améliorer         [Garder
                    tarif]            tarif]
                         |             |
                        [FIN]         [FIN]
"""

 */