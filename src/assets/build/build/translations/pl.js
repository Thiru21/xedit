(function(d){	const l = d['pl'] = d['pl'] || {};	l.dictionary=Object.assign(		l.dictionary||{},		{"%0 of %1":"%0 z %1",Aquamarine:"Akwamaryna",Black:"Czarny","Block quote":"Cytat blokowy",Blue:"Niebieski","Break text":"","Bulleted List":"Lista wypunktowana",Cancel:"Anuluj","Cannot upload file:":"Nie można przesłać pliku:","Centered image":"Obraz wyrównany do środka","Change image text alternative":"Zmień tekst zastępczy obrazka","Choose heading":"Wybierz nagłówek","Could not insert image at the current position.":"Nie można wstawić obrazka w bieżącej lokalizacji.","Could not obtain resized image URL.":"Nie można pobrać adresu URL obrazka po przeskalowaniu.","Decrease indent":"Zmniejsz wcięcie","Dim grey":"Ciemnoszary",Downloadable:"Do pobrania","Dropdown toolbar":"Rozwijany pasek narzędzi","Edit block":"Edytuj blok","Edit link":"Edytuj odnośnik","Editor toolbar":"Pasek narzędzi edytora","Enter image caption":"Wstaw tytuł obrazka","Full size image":"Obraz w pełnym rozmiarze",Green:"Zielony",Grey:"Szary",Heading:"Nagłówek","Heading 1":"Nagłówek 1","Heading 2":"Nagłówek 2","Heading 3":"Nagłówek 3","Heading 4":"Nagłówek 4","Heading 5":"Nagłówek 5","Heading 6":"Nagłówek 6","Horizontal line":"Linia pozioma","Image resize list":"","Image toolbar":"Pasek narzędzi obrazka","image widget":"Obraz","In line":"","Increase indent":"Zwiększ wcięcie","Insert image":"Wstaw obraz","Insert image or file":"Wstaw obrazek lub plik","Insert media":"Wstaw media","Insert paragraph after block":"Wstaw akapit po bloku","Insert paragraph before block":"Wstaw akapit przed blokiem","Inserting image failed":"Wstawienie obrazka nie powiodło się.","Left aligned image":"Obraz wyrównany do lewej","Light blue":"Jasnoniebieski","Light green":"Jasnozielony","Light grey":"Jasnoszary",Link:"Wstaw odnośnik","Link image":"Wstaw odnośnik do obrazka","Link URL":"Adres URL","Media URL":"Adres URL","media widget":"widget osadzenia mediów",Next:"Następny","Numbered List":"Lista numerowana","Open in a new tab":"Otwórz w nowej zakładce","Open link in new tab":"Otwórz odnośnik w nowej zakładce",Orange:"Pomarańczowy",Original:"Oryginalny",Paragraph:"Akapit","Paste the media URL in the input.":"Wklej adres URL mediów do pola.",Previous:"Poprzedni",Purple:"Purpurowy",Red:"Czerwony",Redo:"Ponów","Resize image":"Zmień rozmiar obrazka","Resize image to %0":"Zmień rozmiar do %0","Resize image to the original size":"Przywróć oryginalny rozmiar obrazu","Rich Text Editor":"Edytor tekstu sformatowanego","Rich Text Editor, %0":"Edytor tekstu sformatowanego, %0","Right aligned image":"Obraz wyrównany do prawej",Save:"Zapisz","Select all":"Zaznacz wszystko","Selecting resized image failed":"Wybranie obrazka po przeskalowaniu nie powiodło się.","Show more items":"Pokaż więcej","Side image":"Obraz dosunięty do brzegu, oblewany tekstem","Text alternative":"Tekst zastępczy obrazka","The URL must not be empty.":"Adres URL nie może być pusty.","This link has no URL":"Nie podano adresu URL odnośnika","This media URL is not supported.":"Ten rodzaj adresu URL nie jest obsługiwany.","Tip: Paste the URL into the content to embed faster.":"Wskazówka: Wklej URL do treści edytora, by łatwiej osadzić media.",Turquoise:"Turkusowy",Undo:"Cofnij",Unlink:"Usuń odnośnik","Upload failed":"Przesyłanie obrazu nie powiodło się","Upload in progress":"Trwa przesyłanie",White:"Biały","Widget toolbar":"Pasek widgetów","Wrap text":"",Yellow:"Żółty"}	);l.getPluralForm=function(n){return (n==1 ? 0 : (n%10>=2 && n%10<=4) && (n%100<12 || n%100>14) ? 1 : n!=1 && (n%10>=0 && n%10<=1) || (n%10>=5 && n%10<=9) || (n%100>=12 && n%100<=14) ? 2 : 3);;};})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));