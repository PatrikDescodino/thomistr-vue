#!/bin/bash

# Lighthouse CI Audit Script pro Barber Shop Thomistr
# Spustí komplexní audit výkonu, SEO a accessibility

echo "🚀 Spouštím Lighthouse audit pro Barber Shop Thomistr..."

# Barvy pro výstup
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# URL pro testování - GitHub Codespaces
BASE_URL="https://didactic-sniffle-v6wqv5v77975hprp-3000.app.github.dev"
PROD_URL="https://barbershopthomistr.cz"

# Vytvoření složky pro výsledky
mkdir -p lighthouse-reports

echo -e "${BLUE}📊 Testované stránky:${NC}"
echo "- Domovská stránka"
echo "- Služby"
echo "- Rezervace" 
echo "- Kontakt"

# Test jednotlivých stránek
PAGES=("" "/sluzby" "/rezervace" "/kontakt")
PAGE_NAMES=("home" "services" "booking" "contact")

for i in "${!PAGES[@]}"; do
    PAGE=${PAGES[$i]}
    NAME=${PAGE_NAMES[$i]}
    URL="${BASE_URL}${PAGE}"
    
    echo -e "\n${YELLOW}🔍 Audituju: ${URL}${NC}"
    
    # Lighthouse audit s důležitými metrikami
    npx lighthouse "$URL" \
        --output=html,json \
        --output-path="./lighthouse-reports/${NAME}" \
        --chrome-flags="--headless --no-sandbox --disable-gpu --disable-dev-shm-usage" \
        --preset=desktop \
        --throttling-method=devtools \
        --only-categories=performance,accessibility,best-practices,seo \
        --save-assets \
        --view=false
        
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✅ Audit ${NAME} dokončen${NC}"
    else
        echo -e "${RED}❌ Chyba při auditu ${NAME}${NC}"
    fi
done

echo -e "\n${GREEN}🎉 Lighthouse audit dokončen!${NC}"
echo -e "${BLUE}📁 Výsledky uloženy v: ./lighthouse-reports/${NC}"

# Kontrola důležitých metrik
echo -e "\n${YELLOW}📋 Doporučení pro optimalizaci:${NC}"
echo "1. 🖼️  Optimalizuj obrázky (WebP/AVIF format)"
echo "2. 🗜️  Komprese textových souborů (Gzip/Brotli)"
echo "3. 📱 Responsive images s srcset"
echo "4. ⚡ Lazy loading pro obrázky mimo viewport"
echo "5. 🎯 Critical CSS inlining"
echo "6. 📦 Code splitting pro vendor knihovny"

echo -e "\n${BLUE}💡 Pro produkční audit změň BASE_URL na: ${PROD_URL}${NC}"