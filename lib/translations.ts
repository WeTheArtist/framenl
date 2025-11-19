
export const LANGUAGES = {
    EN: 'English',
    NL: 'Nederlands',
    FR: 'Français'
};

export type Language = keyof typeof LANGUAGES;

export const translations = {
    // SEO
    SEO_Home_Title: {
        EN: 'framenl | Professional Photography for Business',
        NL: 'framenl | Professionele Bedrijfsfotografie',
        FR: 'framenl | Photographie Professionnelle pour Entreprises',
    },
    SEO_Home_Description: {
        EN: 'Discover and book top-rated corporate and event photographers in the Netherlands. Instant quotes and professional portfolios.',
        NL: 'Ontdek en boek de beste bedrijfs- en evenementenfotografen in Nederland. Directe offertes en professionele portfolio\'s.',
        FR: 'Découvrez et réservez les meilleurs photographes d\'entreprise et d\'événementiel aux Pays-Bas.',
    },
    
    // Header
    Header_Home: { EN: 'Home', NL: 'Home', FR: 'Accueil' },
    Header_FindPhotographer: { EN: 'Find Talent', NL: 'Vind Talent', FR: 'Trouver un talent' },
    Header_MoodBoard: { EN: 'Saved', NL: 'Opgeslagen', FR: 'Enregistré' },
    Header_ForPhotographers: { EN: 'For Creators', NL: 'Voor Creators', FR: 'Pour les créateurs' },
    Header_MyBookings: { EN: 'Projects', NL: 'Projecten', FR: 'Projets' },
    Header_Messages: { EN: 'Messages', NL: 'Berichten', FR: 'Messages' },
    Header_Logout: { EN: 'Logout', NL: 'Uitloggen', FR: 'Déconnexion' },
    Header_Login: { EN: 'Log In', NL: 'Inloggen', FR: 'Connexion' },
    Header_SignUp: { EN: 'Sign Up', NL: 'Aanmelden', FR: 'S\'inscrire' },
    Header_Welcome: { EN: 'Welcome', NL: 'Welkom', FR: 'Bienvenue' },
    
    // Footer
    Footer_Slogan: { EN: 'Elevating brands with professional imagery.', NL: 'Merken versterken met professionele beelden.', FR: 'Élever les marques avec une imagerie professionnelle.' },
    Footer_Explore: { EN: 'Explore', NL: 'Ontdek', FR: 'Explorer' },
    Footer_FindPhotographers: { EN: 'Find Photographers', NL: 'Fotografen Vinden', FR: 'Trouver des photographes' },
    Footer_HowItWorks: { EN: 'How It Works', NL: 'Hoe het Werkt', FR: 'Comment ça marche' },
    Footer_TrustAndSafety: { EN: 'Service Guarantee', NL: 'Servicegarantie', FR: 'Garantie de service' },
    Footer_ForPhotographers: { EN: 'For Creators', NL: 'Voor Creators', FR: 'Pour les créateurs' },
    Footer_JoinCommunity: { EN: 'Join as a Pro', NL: 'Word lid als Pro', FR: 'Rejoindre en tant que Pro' },
    Footer_Pricing: { EN: 'Pricing', NL: 'Prijzen', FR: 'Tarifs' },
    Footer_Resources: { EN: 'Resources', NL: 'Hulpmiddelen', FR: 'Ressources' },
    Footer_Company: { EN: 'Company', NL: 'Bedrijf', FR: 'Entreprise' },
    Footer_AboutUs: { EN: 'About Us', NL: 'Over Ons', FR: 'À propos de nous' },
    Footer_Contact: { EN: 'Contact', NL: 'Contact', FR: 'Contact' },
    Footer_Careers: { EN: 'Careers', NL: 'Carrières', FR: 'Carrières' },
    Footer_AllRightsReserved: { EN: 'All rights reserved.', NL: 'Alle rechten voorbehouden.', FR: 'Tous droits réservés.' },
    
    // Home Page
    HomePage_Hero_Title: { EN: 'Professional Photography for Your Business', NL: 'Professionele Fotografie voor Uw Bedrijf', FR: 'Photographie Professionnelle pour Votre Entreprise' },
    HomePage_Hero_Subtitle: { EN: 'Book top-rated corporate, event, and product photographers in the Netherlands. Elevate your brand with high-quality visuals.', NL: 'Boek de beste bedrijfs-, evenementen- en productfotografen in Nederland. Versterk uw merk met beelden van hoge kwaliteit.', FR: 'Réservez les meilleurs photographes d\'entreprise, d\'événementiel et de produits aux Pays-Bas.' },
    HomePage_Hero_Placeholder: { EN: 'e.g. Corporate headshots in Rotterdam', NL: 'bijv. Zakelijke portretten in Rotterdam', FR: 'ex. Portraits d\'entreprise à Rotterdam' },
    HomePage_Hero_SearchButton: { EN: 'Find Professionals', NL: 'Vind Professionals', FR: 'Trouver des professionnels' },
    HomePage_Featured_Title: { EN: 'Featured Professionals', NL: 'Uitgelichte Professionals', FR: 'Professionnels en vedette' },
    HomePage_Featured_Subtitle: { EN: 'Vetted photographers specializing in corporate, branding, and commercial projects.', NL: 'Geverifieerde fotografen gespecialiseerd in zakelijke, branding- en commerciële projecten.', FR: 'Photographes vérifiés spécialisés dans les projets d\'entreprise, de marque et commerciaux.' },
    HomePage_Categories_Title: { EN: 'Browse by Industry', NL: 'Blader per Industrie', FR: 'Parcourir par secteur' },
    HomePage_Categories_Alt: { EN: 'Browse for {category} photographers', NL: 'Blader door {category} fotografen', FR: 'Parcourir les photographes de {category}' },
    HomePage_Testimonials_Title: { EN: 'Trusted by Businesses', NL: 'Vertrouwd door Bedrijven', FR: 'Reconnu par les entreprises' },
    
    // Categories
    Category_Wedding: { EN: 'Events', NL: 'Evenementen', FR: 'Événements' }, // Re-mapped for business context in UI
    Category_Portraits: { EN: 'Headshots', NL: 'Portretten', FR: 'Portraits' },
    Category_Events: { EN: 'Conferences', NL: 'Conferenties', FR: 'Conférences' },
    Category_Family: { EN: 'Team', NL: 'Team', FR: 'Équipe' },
    Category_Corporate: { EN: 'Corporate', NL: 'Zakelijk', FR: 'Entreprise' },
    Category_Fashion: { EN: 'Brand', NL: 'Merk', FR: 'Marque' },
    Category_RealEstate: { EN: 'Real Estate', NL: 'Vastgoed', FR: 'Immobilier' },
    Category_Newborn: { EN: 'Product', NL: 'Product', FR: 'Produit' },
    Category_Architecture: { EN: 'Architecture', NL: 'Architectuur', FR: 'Architecture' },
    Category_Concerts: { EN: 'Advertising', NL: 'Reclame', FR: 'Publicité' },

    // Photographer Card
    PhotographerCard_StartingFrom: { EN: 'Day Rate From', NL: 'Dagprijs Vanaf', FR: 'Tarif journalier dès' },
    
    // Search Page
    SearchPage_Title: { EN: 'Find a Photographer', NL: 'Vind een Fotograaf', FR: 'Trouver un photographe' },
    SearchPage_ShowingResults: { EN: 'Showing {count} of {total} professionals.', NL: '{count} van de {total} professionals weergegeven.', FR: 'Affichage de {count} professionnels sur {total}.' },
    SearchPage_SearchPlaceholder: { EN: 'Search by service, location, or name...', NL: 'Zoek op dienst, locatie of naam...', FR: 'Rechercher par service, lieu ou nom...' },
    SearchPage_NoResults_Title: { EN: 'No Professionals Found', NL: 'Geen Professionals Gevonden', FR: 'Aucun professionnel trouvé' },
    SearchPage_NoResults_Subtitle: { EN: 'Try adjusting your search criteria.', NL: 'Probeer uw zoekcriteria aan te passen.', FR: 'Essayez d\'ajuster vos critères de recherche.' },

    // Filter Sidebar
    FilterSidebar_Title: { EN: 'Filters', NL: 'Filters', FR: 'Filtres' },
    FilterSidebar_Reset: { EN: 'Reset', NL: 'Resetten', FR: 'Réinitialiser' },
    FilterSidebar_Specialty: { EN: 'Specialty', NL: 'Specialiteit', FR: 'Spécialité' },
    FilterSidebar_PriceRange: { EN: 'Budget', NL: 'Budget', FR: 'Budget' },
    FilterSidebar_Min: { EN: 'Min', NL: 'Min', FR: 'Min' },
    FilterSidebar_Max: { EN: 'Max', NL: 'Max', FR: 'Max' },
    FilterSidebar_Rating: { EN: 'Quality Rating', NL: 'Kwaliteitsbeoordeling', FR: 'Évaluation de la qualité' },
    FilterSidebar_StarsAndUp: { EN: '{stars} stars & up', NL: '{stars} sterren & hoger', FR: '{stars} étoiles & plus' },

    // Login Page
    LoginPage_Title: { EN: 'Client Portal', NL: 'Klantenportaal', FR: 'Portail client' },
    LoginPage_Subtitle: { EN: 'Log in to manage your corporate bookings.', NL: 'Log in om uw zakelijke boekingen te beheren.', FR: 'Connectez-vous pour gérer vos réservations d\'entreprise.' },
    LoginPage_EmailLabel: { EN: 'Work Email', NL: 'Werk E-mail', FR: 'E-mail professionnel' },
    LoginPage_PasswordLabel: { EN: 'Password', NL: 'Wachtwoord', FR: 'Mot de passe' },
    LoginPage_LoginButton: { EN: 'Log In', NL: 'Inloggen', FR: 'Se connecter' },
    LoginPage_Or: { EN: 'OR', NL: 'OF', FR: 'OU' },
    LoginPage_GoogleButton: { EN: 'Continue with Google Workspace', NL: 'Doorgaan met Google Workspace', FR: 'Continuer avec Google Workspace' },
    LoginPage_NoAccount: { EN: "New to framenl?", NL: "Nieuw bij framenl?", FR: "Nouveau sur framenl ?" },
    LoginPage_SignUpLink: { EN: 'Create a business account', NL: 'Maak een zakelijk account', FR: 'Créer un compte professionnel' },
    LoginPage_Error: { EN: 'Invalid credentials.', NL: 'Ongeldige gegevens.', FR: 'Identifiants invalides.' },
    
    // Sign Up Page
    SignUpPage_Title: { EN: 'Create Business Account', NL: 'Zakelijk Account Maken', FR: 'Créer un compte professionnel' },
    SignUpPage_Subtitle: { EN: 'Streamline your photography sourcing process.', NL: 'Stroomlijn uw inkoopproces voor fotografie.', FR: 'Simplifiez votre processus d\'approvisionnement en photographie.' },
    SignUpPage_NameLabel: { EN: 'Contact Name', NL: 'Contact Naam', FR: 'Nom du contact' },
    SignUpPage_CreateAccountButton: { EN: 'Create Account', NL: 'Account Aanmaken', FR: 'Créer un compte' },
    SignUpPage_HaveAccount: { EN: 'Already have an account?', NL: 'Heb je al een account?', FR: 'Vous avez déjà un compte ?' },
    SignUpPage_LoginLink: { EN: 'Log in', NL: 'Inloggen', FR: 'Se connecter' },
    SignUpPage_PasswordError: { EN: 'Password must be at least 6 characters.', NL: 'Wachtwoord moet minimaal 6 tekens zijn.', FR: 'Le mot de passe doit comporter au moins 6 caractères.' },
    SignUpPage_EmailExistsError: { EN: 'Account already exists.', NL: 'Account bestaat al.', FR: 'Le compte existe déjà.' },

    // Profile Page
    ProfilePage_BackToSearch: { EN: 'Back to Results', NL: 'Terug naar Resultaten', FR: 'Retour aux résultats' },
    ProfilePage_Tab_Portfolio: { EN: 'Work Samples', NL: 'Werkvoorbeelden', FR: 'Exemples de travail' },
    ProfilePage_Tab_Packages: { EN: 'Services', NL: 'Diensten', FR: 'Services' },
    ProfilePage_Tab_Reviews: { EN: 'Client Feedback', NL: 'Klantfeedback', FR: 'Retours clients' },
    ProfilePage_Tab_About: { EN: 'Professional Bio', NL: 'Professionele Bio', FR: 'Bio professionnelle' },
    ProfilePage_Verified: { EN: 'Verified Pro', NL: 'Geverifieerde Pro', FR: 'Pro vérifié' },
    ProfilePage_BookTitle: { EN: 'Book {name}', NL: 'Boek {name}', FR: 'Réserver {name}' },
    ProfilePage_SelectDate: { EN: '1. Select Date', NL: '1. Selecteer Datum', FR: '1. Sélectionnez une date' },
    ProfilePage_DateBooked: { EN: 'Date unavailable.', NL: 'Datum niet beschikbaar.', FR: 'Date indisponible.' },
    ProfilePage_ChoosePackage: { EN: '2. Select Service', NL: '2. Selecteer Dienst', FR: '2. Sélectionnez un service' },
    ProfilePage_AddNote: { EN: '3. Project Brief', NL: '3. Projectomschrijving', FR: '3. Brief du projet' },
    ProfilePage_NotePlaceholder: { EN: 'Describe your project requirements, usage rights needed, etc.', NL: 'Beschrijf uw projectvereisten, benodigde gebruiksrechten, enz.', FR: 'Décrivez vos exigences de projet, les droits d\'utilisation nécessaires, etc.' },
    ProfilePage_QuoteTotal: { EN: 'Estimated Total', NL: 'Geschat Totaal', FR: 'Total estimé' },
    ProfilePage_RequestToBook: { EN: 'Send Booking Request', NL: 'Boekingsverzoek Versturen', FR: 'Envoyer une demande' },
    ProfilePage_AddToMoodboard: { EN: 'Save to List', NL: 'Opslaan in Lijst', FR: 'Enregistrer dans la liste' },
    ProfilePage_AddedToMoodboard: { EN: 'Saved', NL: 'Opgeslagen', FR: 'Enregistré' },
    ProfilePage_AboutTitle: { EN: 'About', NL: 'Over', FR: 'À propos' },
    ProfilePage_ReviewsTitle: { EN: 'Client Reviews', NL: 'Klantrecensies', FR: 'Avis clients' },
    ProfilePage_ReviewsCount: { EN: '({count})', NL: '({count})', FR: '({count})' },

    // Booking Modal
    BookingModal_ConfirmTitle: { EN: 'Confirm Project Details', NL: 'Bevestig Projectdetails', FR: 'Confirmez les détails du projet' },
    BookingModal_Photographer: { EN: 'Professional', NL: 'Professional', FR: 'Professionnel' },
    BookingModal_Date: { EN: 'Scheduled Date', NL: 'Geplande Datum', FR: 'Date prévue' },
    BookingModal_Package: { EN: 'Service Package', NL: 'Dienstenpakket', FR: 'Forfait de service' },
    BookingModal_YourNote: { EN: 'Project Brief', NL: 'Projectomschrijving', FR: 'Brief du projet' },
    BookingModal_TotalPrice: { EN: 'Total Amount', NL: 'Totaalbedrag', FR: 'Montant total' },
    BookingModal_Cancel: { EN: 'Back', NL: 'Terug', FR: 'Retour' },
    BookingModal_ProceedToPayment: { EN: 'Proceed to Payment', NL: 'Ga naar Betaling', FR: 'Procéder au paiement' },
    BookingModal_PaymentTitle: { EN: 'Secure Checkout', NL: 'Veilig Afrekenen', FR: 'Paiement sécurisé' },
    BookingModal_Total: { EN: 'Total', NL: 'Totaal', FR: 'Total' },
    BookingModal_Card: { EN: 'Corporate Card', NL: 'Zakelijke Kaart', FR: 'Carte d\'entreprise' },
    BookingModal_CardNumber: { EN: 'Card Number', NL: 'Kaartnummer', FR: 'Numéro de carte' },
    BookingModal_ExpiryDate: { EN: 'Expiry', NL: 'Vervaldatum', FR: 'Expiration' },
    BookingModal_ChooseBank: { EN: 'Select Bank', NL: 'Selecteer Bank', FR: 'Sélectionner une banque' },
    BookingModal_PayPalRedirect: { EN: 'Redirecting to PayPal secure checkout.', NL: 'Doorverwijzen naar PayPal beveiligde checkout.', FR: 'Redirection vers le paiement sécurisé PayPal.' },
    BookingModal_Processing: { EN: 'Processing...', NL: 'Verwerken...', FR: 'Traitement...' },
    BookingModal_PayButton: { EN: 'Authorize €{price}', NL: 'Autoriseer €{price}', FR: 'Autoriser {price} €' },
    BookingModal_SuccessTitle: { EN: 'Request Sent', NL: 'Verzoek Verzonden', FR: 'Demande envoyée' },
    BookingModal_SuccessMessage: { EN: 'Your booking request for {name} has been sent. An invoice will be generated upon confirmation.', NL: 'Uw boekingsverzoek voor {name} is verzonden. Een factuur wordt gegenereerd na bevestiging.', FR: 'Votre demande de réservation pour {name} a été envoyée. Une facture sera générée après confirmation.' },
    BookingModal_Done: { EN: 'Return to Dashboard', NL: 'Terug naar Dashboard', FR: 'Retour au tableau de bord' },

    // Calendar
    Calendar_Available: { EN: 'Available', NL: 'Beschikbaar', FR: 'Disponible' },
    Calendar_Booked: { EN: 'Busy', NL: 'Bezet', FR: 'Occupé' },
    Calendar_Selected: { EN: 'Selected', NL: 'Geselecteerd', FR: 'Sélectionné' },

    // Photographer Dashboard
    Dashboard_Title: { EN: 'Creator Dashboard', NL: 'Creator Dashboard', FR: 'Tableau de bord créateur' },
    Dashboard_Subtitle: { EN: 'Manage your professional profile and corporate clients.', NL: 'Beheer uw professionele profiel en zakelijke klanten.', FR: 'Gérez votre profil professionnel et vos clients d\'entreprise.' },
    Dashboard_SaveButton: { EN: 'Update Profile', NL: 'Profiel Bijwerken', FR: 'Mettre à jour le profil' },
    Dashboard_SaveSuccess: { EN: 'Profile updated.', NL: 'Profiel bijgewerkt.', FR: 'Profil mis à jour.' },
    Dashboard_Section_Info_Title: { EN: 'Professional Details', NL: 'Professionele Details', FR: 'Détails professionnels' },
    Dashboard_Section_Info_Desc: { EN: 'Your core business information.', NL: 'Uw kernbedrijfsinformatie.', FR: 'Vos informations commerciales de base.' },
    Dashboard_LocationPlaceholder: { EN: 'e.g., Rotterdam, NL', NL: 'bijv. Rotterdam, NL', FR: 'ex. Rotterdam, NL' },
    Dashboard_BioLabel: { EN: 'Professional Bio', NL: 'Professionele Bio', FR: 'Bio professionnelle' },
    Dashboard_BioPlaceholder: { EN: 'Describe your experience with corporate clients...', NL: 'Beschrijf uw ervaring met zakelijke klanten...', FR: 'Décrivez votre expérience avec les clients d\'entreprise...' },
    Dashboard_Section_Presence_Title: { EN: 'Portfolio Links', NL: 'Portfolio Links', FR: 'Liens de portfolio' },
    Dashboard_Section_Presence_Desc: { EN: 'External links to your work.', NL: 'Externe links naar uw werk.', FR: 'Liens externes vers votre travail.' },
    Dashboard_Section_Availability_Title: { EN: 'Schedule', NL: 'Agenda', FR: 'Emploi du temps' },
    Dashboard_Section_Availability_Desc: { EN: 'Manage your booking availability.', NL: 'Beheer uw boekingsbeschikbaarheid.', FR: 'Gérez votre disponibilité de réservation.' },
    Dashboard_Section_Specialties_Title: { EN: 'Services', NL: 'Diensten', FR: 'Services' },
    Dashboard_Section_Specialties_Desc: { EN: 'Select your expertise areas.', NL: 'Selecteer uw expertisegebieden.', FR: 'Sélectionnez vos domaines d\'expertise.' },
    Dashboard_Section_Images_Title: { EN: 'Portfolio', NL: 'Portfolio', FR: 'Portfolio' },
    Dashboard_Section_Images_Desc: { EN: 'Showcase your best corporate work.', NL: 'Laat uw beste zakelijke werk zien.', FR: 'Présentez votre meilleur travail d\'entreprise.' },
    Dashboard_ProfileImage_Title: { EN: 'Avatar', NL: 'Avatar', FR: 'Avatar' },
    Dashboard_ProfileImage_Desc: { EN: 'Professional headshot.', NL: 'Professionele portretfoto.', FR: 'Portrait professionnel.' },
    Dashboard_UploadImage: { EN: 'Upload', NL: 'Uploaden', FR: 'Télécharger' },
    Dashboard_Portfolio_Title: { EN: 'Gallery', NL: 'Gallerij', FR: 'Galerie' },
    Dashboard_Portfolio_Desc: { EN: 'Max {count} images.', NL: 'Max {count} afbeeldingen.', FR: 'Max {count} images.' },
    Dashboard_UploadMore: { EN: 'Add Images', NL: 'Afbeeldingen Toevoegen', FR: 'Ajouter des images' },
    Dashboard_Section_Packages_Title: { EN: 'Service Packages', NL: 'Dienstenpakketten', FR: 'Forfaits de services' },
    Dashboard_Section_Packages_Desc: { EN: 'Define your corporate offerings.', NL: 'Definieer uw zakelijke aanbod.', FR: 'Définissez vos offres d\'entreprise.' },
    Dashboard_Package: { EN: 'Service', NL: 'Dienst', FR: 'Service' },
    Dashboard_PackageName: { EN: 'Service Name', NL: 'Dienstnaam', FR: 'Nom du service' },
    Dashboard_Price: { EN: 'Rate (€)', NL: 'Tarief (€)', FR: 'Tarif (€)' },
    Dashboard_Description: { EN: 'Deliverables', NL: 'Leveringen', FR: 'Livrables' },
    Dashboard_Features: { EN: 'Key Features', NL: 'Belangrijkste Kenmerken', FR: 'Caractéristiques principales' },
    Dashboard_AddPackage: { EN: 'Add Service', NL: 'Dienst Toevoegen', FR: 'Ajouter un service' },

    // User Dashboard
    UserDashboard_Title: { EN: 'Project Dashboard', NL: 'Project Dashboard', FR: 'Tableau de bord de projet' },
    UserDashboard_Welcome: { EN: 'Overview for {name}.', NL: 'Overzicht voor {name}.', FR: 'Aperçu pour {name}.' },
    UserDashboard_Upcoming: { EN: 'Active Projects', NL: 'Actieve Projecten', FR: 'Projets actifs' },
    UserDashboard_NoUpcoming: { EN: 'No active projects.', NL: 'Geen actieve projecten.', FR: 'Aucun projet actif.' },
    UserDashboard_Past: { EN: 'Completed Projects', NL: 'Voltooide Projecten', FR: 'Projets terminés' },
    UserDashboard_NoPast: { EN: 'No completed projects.', NL: 'Geen voltooide projecten.', FR: 'Aucun projet terminé.' },
    UserDashboard_Status_Upcoming: { EN: 'Scheduled', NL: 'Gepland', FR: 'Prévu' },
    UserDashboard_Status_Completed: { EN: 'Done', NL: 'Klaar', FR: 'Fait' },
    UserDashboard_ViewPhotographer: { EN: 'View Profile', NL: 'Bekijk Profiel', FR: 'Voir le profil' },

    // Mood Board Page
    MoodBoard_Title: { EN: 'Saved Talent', NL: 'Opgeslagen Talent', FR: 'Talent enregistré' },
    MoodBoard_Subtitle_HasItems: { EN: '{count} saved item.', NL: '{count} opgeslagen item.', FR: '{count} élément enregistré.' },
    MoodBoard_Subtitle_HasItems_Plural: { EN: '{count} saved items.', NL: '{count} opgeslagen items.', FR: '{count} éléments enregistrés.' },
    MoodBoard_Empty_Title: { EN: 'No saved profiles.', NL: 'Geen opgeslagen profielen.', FR: 'Aucun profil enregistré.' },
    MoodBoard_Empty_Subtitle: { EN: 'Save photographers for future projects.', NL: 'Sla fotografen op voor toekomstige projecten.', FR: 'Enregistrez des photographes pour de futurs projets.' },
    MoodBoard_By: { EN: 'by {name}', NL: 'door {name}', FR: 'par {name}' },
    MoodBoard_ViewProfile: { EN: 'View Profile', NL: 'Bekijk Profiel', FR: 'Voir le profil' },
    MoodBoard_Remove: { EN: 'Remove', NL: 'Verwijderen', FR: 'Supprimer' },
    MoodBoard_StartCollecting: { EN: 'Start Browsing', NL: 'Begin met Bladeren', FR: 'Commencer à naviguer' },
    MoodBoard_StartCollecting_Desc: { EN: "Bookmark photographers to create a shortlist.", NL: 'Bookmark fotografen om een shortlist te maken.', FR: 'Marquez les photographes pour créer une liste restreinte.' },
    
    // Messages Page
    Messages_Title: { EN: 'Communications', NL: 'Communicatie', FR: 'Communications' },
    Messages_Conversations: { EN: 'Inbox', NL: 'Inbox', FR: 'Boîte de réception' },
    Messages_ViewProfile: { EN: 'View Profile', NL: 'Bekijk Profiel', FR: 'Voir le profil' },
    Messages_Placeholder: { EN: 'Write a message...', NL: 'Schrijf een bericht...', FR: 'Écrire un message...' },
    Messages_Send: { EN: 'Send', NL: 'Verstuur', FR: 'Envoyer' },
    Messages_SelectConversation_Title: { EN: 'Select Conversation', NL: 'Selecteer Gesprek', FR: 'Sélectionner une conversation' },
    Messages_SelectConversation_Desc: { EN: "Communicate directly with professionals regarding your projects.", NL: 'Communiceer direct met professionals over uw projecten.', FR: 'Communiquez directement avec des professionnels concernant vos projets.' },
    
    // Static Pages
    HowItWorks_Title: { EN: 'How It Works', NL: 'Hoe het Werkt', FR: 'Comment ça marche' },
    HowItWorks_Subtitle: { EN: 'Efficiently source photography for your business.', NL: 'Efficiënt fotografie inkopen voor uw bedrijf.', FR: 'Approvisionnez efficacement la photographie pour votre entreprise.' },
    HowItWorks_Step1_Title: { EN: 'Search & Filter', NL: 'Zoeken & Filteren', FR: 'Rechercher et filtrer' },
    HowItWorks_Step1_Desc: { EN: 'Find specialists in corporate, product, or event photography based on your specific business needs.', NL: 'Vind specialisten in bedrijfs-, product- of evenementenfotografie op basis van uw specifieke bedrijfsbehoeften.', FR: 'Trouvez des spécialistes en photographie d\'entreprise, de produit ou d\'événementiel en fonction de vos besoins spécifiques.' },
    HowItWorks_Step2_Title: { EN: 'Book & Invoice', NL: 'Boeken & Factureren', FR: 'Réserver et facturer' },
    HowItWorks_Step2_Desc: { EN: "Select your package and dates. Receive automated VAT invoices for all bookings.", NL: 'Selecteer uw pakket en data. Ontvang geautomatiseerde BTW-facturen voor alle boekingen.', FR: 'Sélectionnez votre forfait et vos dates. Recevez des factures TVA automatisées pour toutes les réservations.' },
    HowItWorks_Step3_Title: { EN: 'Receive Assets', NL: 'Ontvang Assets', FR: 'Recevoir les actifs' },
    HowItWorks_Step3_Desc: { EN: 'Get high-resolution images delivered via our secure platform, ready for marketing use.', NL: 'Ontvang afbeeldingen in hoge resolutie via ons beveiligde platform, klaar voor marketinggebruik.', FR: 'Recevez des images haute résolution via notre plateforme sécurisée, prêtes pour une utilisation marketing.' },
    
    TrustAndSafety_Title: { EN: 'Enterprise Standard', NL: 'Enterprise Standaard', FR: 'Standard d\'entreprise' },
    TrustAndSafety_Subtitle: { EN: 'We ensure reliability and quality for your business operations.', NL: 'Wij garanderen betrouwbaarheid en kwaliteit voor uw bedrijfsvoering.', FR: 'Nous assurons la fiabilité et la qualité de vos opérations commerciales.' },
    TrustAndSafety_Card1_Title: { EN: 'Vetted Professionals', NL: 'Geverifieerde Professionals', FR: 'Professionnels vérifiés' },
    TrustAndSafety_Card1_Desc: { EN: 'Strict vetting process for all photographers to ensure corporate-grade quality.', NL: 'Strikt verificatieproces voor alle fotografen om kwaliteit op bedrijfsniveau te garanderen.', FR: 'Processus de vérification strict pour tous les photographes afin de garantir une qualité de niveau entreprise.' },
    TrustAndSafety_Card2_Title: { EN: 'Secure Invoicing', NL: 'Veilige Facturering', FR: 'Facturation sécurisée' },
    TrustAndSafety_Card2_Desc: { EN: 'Centralized billing and compliant VAT invoicing for all your bookings.', NL: 'Gecentraliseerde facturering en conforme BTW-facturering voor al uw boekingen.', FR: 'Facturation centralisée et facturation TVA conforme pour toutes vos réservations.' },
    TrustAndSafety_Card3_Title: { EN: 'Quality Assurance', NL: 'Kwaliteitsborging', FR: 'Assurance qualité' },
    TrustAndSafety_Card3_Desc: { EN: 'Money-back guarantee if deliverables do not meet the agreed-upon brief.', NL: 'Niet-goed-geld-terug-garantie als de leveringen niet voldoen aan de overeengekomen briefing.', FR: 'Garantie de remboursement si les livrables ne correspondent pas au brief convenu.' },
    TrustAndSafety_Card4_Title: { EN: 'Account Management', NL: 'Accountbeheer', FR: 'Gestion de compte' },
    TrustAndSafety_Card4_Desc: { EN: 'Dedicated support for high-volume enterprise clients.', NL: 'Toegewijde ondersteuning voor zakelijke klanten met een groot volume.', FR: 'Support dédié pour les clients entreprises à fort volume.' },
    
    Pricing_Title: { EN: 'Transparent B2B Pricing', NL: 'Transparante B2B Prijzen', FR: 'Tarification B2B transparente' },
    Pricing_Subtitle: { EN: 'No subscription fees. Pay per project.', NL: 'Geen abonnementskosten. Betaal per project.', FR: 'Pas de frais d\'abonnement. Payez par projet.' },
    Pricing_Card_Title: { EN: 'Standard Commission', NL: 'Standaard Commissie', FR: 'Commission standard' },
    Pricing_Card_Desc: { EN: '15% service fee on completed bookings. Includes insurance and asset management.', NL: '15% servicekosten op voltooide boekingen. Inclusief verzekering en asset management.', FR: 'Frais de service de 15% sur les réservations terminées. Comprend l\'assurance et la gestion des actifs.' },
    Pricing_Feature1: { EN: 'Free business profile', NL: 'Gratis bedrijfsprofiel', FR: 'Profil d\'entreprise gratuit' },
    Pricing_Feature2: { EN: 'Unlimited project listings', NL: 'Onbeperkte projectvermeldingen', FR: 'Listes de projets illimitées' },
    Pricing_Feature3: { EN: 'Access to vetted talent', NL: 'Toegang tot geverifieerd talent', FR: 'Accès à des talents vérifiés' },
    Pricing_Feature4: { EN: 'Centralized invoicing', NL: 'Gecentraliseerde facturering', FR: 'Facturation centralisée' },
    Pricing_Button: { EN: 'Join Now', NL: 'Nu Lid Worden', FR: 'Rejoindre maintenant' },

    Resources_Title: { EN: 'Business Resources', NL: 'Zakelijke Bronnen', FR: 'Ressources commerciales' },
    Resources_Subtitle: { EN: 'Guides for better visual marketing.', NL: 'Gidsen voor betere visuele marketing.', FR: 'Guides pour un meilleur marketing visuel.' },
    Resources_Card1_Title: { EN: 'Corporate Briefing Template', NL: 'Zakelijke Briefing Sjabloon', FR: 'Modèle de briefing d\'entreprise' },
    Resources_Card1_Desc: { EN: 'How to write a photography brief that gets results.', NL: 'Hoe u een fotografiebriefing schrijft die resultaten oplevert.', FR: 'Comment rédiger un brief photo qui donne des résultats.' },
    
    About_Title: { EN: 'Our Mission', NL: 'Onze Missie', FR: 'Notre mission' },
    About_Subtitle: { EN: 'Streamlining visual content creation for modern businesses.', NL: 'Het stroomlijnen van visuele contentcreatie voor moderne bedrijven.', FR: 'Rationalisation de la création de contenu visuel pour les entreprises modernes.' },
    About_P1: { EN: 'framenl connects businesses with the best photographic talent in the Netherlands. We understand that high-quality imagery is essential for brand communication, yet sourcing reliable photographers can be time-consuming.', NL: 'framenl verbindt bedrijven met het beste fotografische talent in Nederland. We begrijpen dat beelden van hoge kwaliteit essentieel zijn voor merkcommunicatie, maar het vinden van betrouwbare fotografen kan tijdrovend zijn.', FR: 'framenl connecte les entreprises avec les meilleurs talents photographiques aux Pays-Bas. Nous comprenons que l\'imagerie de haute qualité est essentielle pour la communication de marque, mais trouver des photographes fiables peut prendre du temps.' },
    About_P2: { EN: 'Our platform offers a vetted network of professionals specializing in corporate, product, event, and real estate photography. We provide the infrastructure for booking, payments, and asset delivery, allowing you to focus on your business.', NL: 'Ons platform biedt een geverifieerd netwerk van professionals gespecialiseerd in bedrijfs-, product-, evenementen- en vastgoedfotografie. Wij bieden de infrastructuur voor boeking, betalingen en levering van assets, zodat u zich kunt concentreren op uw bedrijf.', FR: 'Notre plateforme offre un réseau vérifié de professionnels spécialisés dans la photographie d\'entreprise, de produit, d\'événementiel et d\'immobilier. Nous fournissons l\'infrastructure pour la réservation, les paiements et la livraison des actifs, vous permettant de vous concentrer sur votre entreprise.' },
    About_P3: { EN: 'From startups to established enterprises, framenl is your partner for visual excellence.', NL: 'Van startups tot gevestigde ondernemingen, framenl is uw partner voor visuele excellentie.', FR: 'Des startups aux entreprises établies, framenl est votre partenaire pour l\'excellence visuelle.' },
    
    Contact_Title: { EN: 'Contact Sales', NL: 'Neem Contact Op', FR: 'Contacter les ventes' },
    Contact_Subtitle: { EN: 'Need a custom solution for your enterprise? Let\'s talk.', NL: 'Heeft u een oplossing op maat nodig voor uw onderneming? Laten we praten.', FR: 'Besoin d\'une solution personnalisée pour votre entreprise ? Parlons-en.' },
    Contact_Name: { EN: 'Name', NL: 'Naam', FR: 'Nom' },
    Contact_Email: { EN: 'Work Email', NL: 'Werk E-mail', FR: 'E-mail professionnel' },
    Contact_Subject: { EN: 'Inquiry', NL: 'Vraag', FR: 'Demande' },
    Contact_Message: { EN: 'Details', NL: 'Details', FR: 'Détails' },
    Contact_Send: { EN: 'Submit Inquiry', NL: 'Vraag Indienen', FR: 'Soumettre la demande' },

    Careers_Title: { EN: 'Careers', NL: 'Carrières', FR: 'Carrières' },
    Careers_Subtitle: { EN: 'Help us shape the future of B2B creative services.', NL: 'Help ons de toekomst van B2B creatieve diensten vorm te geven.', FR: 'Aidez-nous à façonner l\'avenir des services créatifs B2B.' },
    Careers_Openings: { EN: 'Current Openings', NL: 'Huidige Vacatures', FR: 'Postes ouverts' },
    Careers_ViewDetails: { EN: 'View Details', NL: 'Bekijk Details', FR: 'Voir les détails' },
    Careers_NoRole: { EN: 'Don\'t see a role?', NL: 'Zie je geen rol?', FR: 'Vous ne voyez pas de rôle ?' },
    Careers_NoRole_Desc: { EN: "Don't see a role that fits? Send your CV to ", NL: 'Zie je geen passende rol? Stuur je CV naar ', FR: 'Vous ne voyez pas de poste qui vous correspond ? Envoyez votre CV à ' },

    // Waitlist Banner
    Waitlist_Text: { 
        EN: "This is a demo. Photographers & businesses, please", 
        NL: "Dit is een demo. Fotografen & bedrijven,", 
        FR: "Ceci est une démo. Photographes & entreprises," 
    },
    Waitlist_Link: { 
        EN: "join the waitlist", 
        NL: "meld je aan voor de wachtlijst", 
        FR: "rejoignez la liste d'attente" 
    },
};

export type TranslationKey = keyof typeof translations;
