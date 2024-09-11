function displayOutput() {
  // Get the input value
  const inputText = document.getElementById("inputText").value.toLowerCase();
  const loadingDiv = document.getElementById("loading");
  const outputDiv = document.getElementById("output");

  // Clear previous output
  loadingDiv.style.display = "block";
  outputDiv.innerHTML = "";

  // Show the loading indicator
  setTimeout(() => {
    const outputs = {
      "cotton dress": `
            <table>
                <tr><th>HS Code</th><th>Score</th><th>Chapter Description</th><th>Description</th></tr>
                <tr><td>5201.00</td><td>75.06%</td><td>Cotton, not carded or combed</td><td></td></tr>
                <tr><td>5203.00</td><td>74.46%</td><td>Cotton, carded or combed</td><td></td></tr>
                <tr><td>5212.11.60.80</td><td>67.33%</td><td>Other woven fabrics of cotton</td><td>oxford cloth 227</td></tr>
                <tr><td>5212.11.60.20</td><td>67.15%</td><td>Other woven fabrics of cotton</td><td>poplin or broadcloth 314</td></tr>
                <tr><td>5212.15.60.20</td><td>66.64%</td><td>Other woven fabrics of cotton</td><td>poplin or broadcloth 314</td></tr>
            </table>
        `,
      "pen": `
            <table>
                <tr><th>HS Code</th><th>Score</th><th>Chapter Description</th><th>Description</th></tr>
                <tr><td>9608.10.00.00</td><td>75.66%</td><td>Ball point pens; felt tipped and other porous-tipped pens and markers; fountain pens, stylograph pens and other pens; duplicating styli; propelling or sliding pencils (for example, mechanical pencils); pen-holders, pencil-holders and similar holders; parts (including caps and clips) of the foregoing articles, other than those of heading 9609</td><td>ball point pens</td></tr>
                <tr><td>9608.30.00.31</td><td>72.83%</td><td>Ball point pens; felt tipped and other porous-tipped pens and markers; fountain pens, stylograph pens and other pens; duplicating styli; propelling or sliding pencils (for example, mechanical pencils); pen-holders, pencil-holders and similar holders; parts (including caps and clips) of the foregoing articles, other than those of heading 9609</td><td>india ink drawing pens</td></tr>
                <tr><td>9608.99.30.00</td><td>72.72%</td><td>Ball point pens; felt tipped and other porous-tipped pens and markers; fountain pens, stylograph pens and other pens; duplicating styli; propelling or sliding pencils (for example, mechanical pencils); pen-holders, pencil-holders and similar holders; parts (including caps and clips) of the foregoing articles, other than those of heading 9609</td><td>balls for ball point pens</td></tr>
            </table>
        `,
     "mobile crane": `
        <table>
            <tr><th>HS Code</th><th>Score</th><th>Chapter Description</th><th>Description</th></tr>
            <tr><td>8705.10.00</td><td>77.1%</td><td>Special purpose motor vehicles, other than those principally designed for the transport of persons or goods (for example, wreckers, mobile cranes, fire fighting vehicles, concrete mixers, road sweepers, spraying vehicles, mobile workshops, mobile radiological units):</td><td>mobile cranes</td></tr>
            <tr><td>8705.10.00.50</td><td>70.31%</td><td>Special purpose motor vehicles, other than those principally designed for the transport of persons or goods (for example, wreckers, mobile cranes, fire fighting vehicles, concrete mixers, road sweepers, spraying vehicles, mobile workshops, mobile radiological units):</td><td>other</td></tr>
            <tr><td>8705.90.00.10</td><td>68.93%</td><td>Special purpose motor vehicles, other than those principally designed for the transport of persons or goods (for example, wreckers, mobile cranes, fire fighting vehicles, concrete mixers, road sweepers, spraying vehicles, mobile workshops, mobile radiological units):</td><td>mobile radiological units</td></tr>
            <tr><td>9508.10.00.00</td><td>60.12%</td><td>Traveling circuses and traveling menageries; amusement park rides and water park amusements; fairground amusements, including shooting galleries; traveling theaters; parts and accessories thereof:</td><td>traveling circuses and traveling menageries</td></tr>
            <tr><td>8608.00.00.00</td><td>59.89%</td><td>Railway or tramway track fixtures and fittings; mechanical (including electro-mechanical) signaling, safety or traffic control equipment for railways, tramways, roads, inland waterways, parking facilities, port installations or airfields; parts of the foregoing</td><td></td></tr>
            <tr><td>9508.40.00.00</td><td>59.46%</td><td>Traveling circuses and traveling menageries; amusement park rides and water park amusements; fairground amusements, including shooting galleries; traveling theaters; parts and accessories thereof:</td><td>traveling theaters</td></tr>
            <tr><td>9508.24.00.00</td><td>57.28%</td><td>Traveling circuses and traveling menageries; amusement park rides and water park amusements; fairground amusements, including shooting galleries; traveling theaters; parts and accessories thereof:</td><td>motion simulators and moving theaters</td></tr>
        </table>
      `,

        "laptop":`
           <table>
                <tr><th>HS Code</th><th>Score</th><th>Chapter Description</th><th>Description</th></tr>
                <tr><td>8518.30</td><td>59.45%</td><td>Microphones and stands therefor; loudspeakers, whether or not mounted in their enclosures; headphones and earphones, whether or not combined with a microphone, and sets consisting of a microphone and one or more loudspeakers; audio-frequency electric amplifiers; electric sound amplifier sets; parts thereof:</td><td>headphones and earphones whether or not combined with a microphone and sets consisting of a microphone and one or more loudspeakers</td></tr>
                <tr><td>8470.21.00.00</td><td>59.18%</td><td>Calculating machines and pocket-size data recording, reproducing and displaying machines with calculating functions; accounting machines, postage-franking machines, ticket-issuing machines and similar machines, incorporating a calculating device; cash registers:</td><td>incorporating a printing device</td></tr>
                <tr><td>8518.30.10.00</td><td>58.72%</td><td>Microphones and stands therefor; loudspeakers, whether or not mounted in their enclosures; headphones and earphones, whether or not combined with a microphone, and sets consisting of a microphone and one or more loudspeakers; audio-frequency electric amplifiers; electric sound amplifier sets; parts thereof:</td><td>line telephone handsets</td></tr>
                <tr><td>8470.10.00</td><td>58.62%</td><td>Calculating machines and pocket-size data recording, reproducing and displaying machines with calculating functions; accounting machines, postage-franking machines, ticket-issuing machines and similar machines, incorporating a calculating device; cash registers:</td><td>electronic calculators capable of operation without an external source of electric power and pocket-size data recording reproducing and displaying machines with calculating functions</td></tr>
                <tr><td>8470.29.00.00</td><td>58.3%</td><td>Calculating machines and pocket-size data recording, reproducing and displaying machines with calculating functions; accounting machines, postage-franking machines, ticket-issuing machines and similar machines, incorporating a calculating device; cash registers:</td><td>other</td></tr>
                <tr><td>1902.20.00</td><td>56.85%</td><td>Pasta, whether or not cooked or stuffed (with meat or other substances) or otherwise prepared, such as spaghetti, macaroni, noodles, lasagna, gnocchi, ravioli, cannelloni; couscous, whether or not prepared:</td><td>stuffed pasta whether or not cooked or otherwise prepared</td></tr>
                <tr><td>8518.30.20.00</td><td>56.45%</td><td>Microphones and stands therefor; loudspeakers, whether or not mounted in their enclosures; headphones and earphones, whether or not combined with a microphone, and sets consisting of a microphone and one or more loudspeakers; audio-frequency electric amplifiers; electric sound amplifier sets; parts thereof:</td><td>other</td></tr>
                <tr><td>1902.20.00.60</td><td>55.22%</td><td>Pasta, whether or not cooked or stuffed (with meat or other substances) or otherwise prepared, such as spaghetti, macaroni, noodles, lasagna, gnocchi, ravioli, cannelloni; couscous, whether or not prepared:</td><td>other</td></tr>
                <tr><td>1902.11.40.00</td><td>53.51%</td><td>Pasta, whether or not cooked or stuffed (with meat or other substances) or otherwise prepared, such as spaghetti, macaroni, noodles, lasagna, gnocchi, ravioli, cannelloni; couscous, whether or not prepared:</td><td>other including pasta packaged with sauce preparations</td></tr>
            </table>
        `,
     "bag":` 
            <table>
               <tr><th>HS Code</th><th>Score</th><th>Chapter Description</th><th>Description</th></tr>
               <tr><td>4819.40.00.40</td><td>74.37%</td><td>Cartons, boxes, cases, bags and other packing containers, of paper, paperboard, cellulose wadding or webs of cellulose fibers; box files, letter trays and similar articles, of paper or paperboard of a kind used in offices, shops or the like:</td><td>other</td></tr>
               <tr><td>4819.40.00</td><td>73.96%</td><td>Cartons, boxes, cases, bags and other packing containers, of paper, paperboard, cellulose wadding or webs of cellulose fibers; box files, letter trays and similar articles, of paper or paperboard of a kind used in offices, shops or the like:</td><td>other sacks and bags including cones</td></tr>
               <tr><td>4202.22</td><td>71.73%</td><td>Trunks, suitcases, vanity cases, attache cases, briefcases, school satchels, spectacle cases, binocular cases, camera cases, musical instrument cases, gun cases, holsters and similar containers; traveling bags, insulated food or beverage bags, toiletry bags, knapsacks and backpacks, handbags, shopping bags, wallets, purses, map cases, cigarette cases, tobacco pouches, tool bags, sports bags, bottle cases, jewelry boxes, powder cases, cutlery cases and similar containers, of leather or of composition leather, of sheeting of plastics, of textile materials, of vulcanized fiber or of paperboard, or wholly or mainly covered with such materials or with paper:</td><td>with outer surface of sheeting of plastics or of textile materials</td></tr>
               <tr><td>4202.22.15.00</td><td>71.43%</td><td>Trunks, suitcases, vanity cases, attache cases, briefcases, school satchels, spectacle cases, binocular cases, camera cases, musical instrument cases, gun cases, holsters and similar containers; traveling bags, insulated food or beverage bags, toiletry bags, knapsacks and backpacks, handbags, shopping bags, wallets, purses, map cases, cigarette cases, tobacco pouches, tool bags, sports bags, bottle cases, jewelry boxes, powder cases, cutlery cases and similar containers, of leather or of composition leather, of sheeting of plastics, of textile materials, of vulcanized fiber or of paperboard, or wholly or mainly covered with such materials or with paper:</td><td>with outer surface of sheeting of plastics</td></tr>
               <tr><td>4202.12</td><td>71.31%</td><td>Trunks, suitcases, vanity cases, attache cases, briefcases, school satchels, spectacle cases, binocular cases, camera cases, musical instrument cases, gun cases, holsters and similar containers; traveling bags, insulated food or beverage bags, toiletry bags, knapsacks and backpacks, handbags, shopping bags, wallets, purses, map cases, cigarette cases, tobacco pouches, tool bags, sports bags, bottle cases, jewelry boxes, powder cases, cutlery cases and similar containers, of leather or of composition leather, of sheeting of plastics, of textile materials, of vulcanized fiber or of paperboard, or wholly or mainly covered with such materials or with paper:</td><td>with outer surface of plastics or of textile materials</td></tr>
               <tr><td>4819.30.00.40</td><td>71.23%</td><td>Cartons, boxes, cases, bags and other packing containers, of paper, paperboard, cellulose wadding or webs of cellulose fibers; box files, letter trays and similar articles, of paper or paperboard of a kind used in offices, shops or the like:</td><td>other</td></tr>
               <tr><td>6305.32.00.10</td><td>62.03%</td><td>Sacks and bags, of a kind used for the packing of goods:</td><td>weighing one kg or more 669</td></tr>
               <tr><td>6305.33.00.60</td><td>61.88%</td><td>Sacks and bags, of a kind used for the packing of goods:</td><td>other 669</td></tr>
               <tr><td>6305.33.00.10</td><td>61.39%</td><td>Sacks and bags, of a kind used for the packing of goods:</td><td>weighing one kg or more 669</td></tr>
            </table>
        `,
     "purebred breeding animals": ` 
            <table>
                <tr><th>HS Code</th><th>Score</th><th>Chapter Description</th><th>Description</th></tr>
                <tr><td>0102.31.00</td><td>83.99%</td><td>Live bovine animals:</td><td>purebred breeding animals</td></tr>
                <tr><td>0102.21.00</td><td>83.77%</td><td>Live bovine animals:</td><td>purebred breeding animals</td></tr>
                <tr><td>0102.21.00.50</td><td>81.15%</td><td>Live bovine animals:</td><td>female</td></tr>
                <tr><td>0106.19.91.20</td><td>64.01%</td><td>Other live animals:</td><td>dogs</td></tr>
                <tr><td>0106.19.91.95</td><td>63%</td><td>Other live animals:</td><td>other</td></tr>
                <tr><td>0106.19.91</td><td>62.48%</td><td>Other live animals:</td><td>other</td></tr>
                <tr><td>4106.21.90.00</td><td>60.44%</td><td>Tanned or crust skins of other animals, without wool or hair on, whether or not split, but not further prepared:</td><td>other</td></tr>
                <tr><td>4106.21.10.00</td><td>59.18%</td><td>Tanned or crust skins of other animals, without wool or hair on, whether or not split, but not further prepared:</td><td>wet blues</td></tr>
                <tr><td>4106.21</td><td>59.11%</td><td>Tanned or crust skins of other animals, without wool or hair on, whether or not split, but not further prepared:</td><td>in the wet state including wet-blue</td></tr>
            </table>
        `,


      "dairy": `
            <table>
                <tr><th>HS Code</th><th>Score</th><th>Chapter Description</th><th>Description</th></tr>
                <tr><td>8434.20.00.00</td><td>80.81%</td><td>Milking machines and dairy machinery, and parts thereof:</td><td>dairy machinery</td></tr>
                <tr><td>0405.20</td><td>77.48%</td><td>Butter and other fats and oils derived from milk; dairy spreads:</td><td>dairy spreads</td></tr>
                <tr><td>0405.20.80.00</td><td>74.12%</td><td>Butter and other fats and oils derived from milk; dairy spreads:</td><td>other</td></tr>
                <tr><td>0405.20.70.00</td><td>71.83%</td><td>Butter and other fats and oils derived from milk; dairy spreads:</td><td>other</td></tr>
                <tr><td>0403.20</td><td>69.26%</td><td>Yogurt; buttermilk, curdled milk and cream, kephir and other fermented or acidified milk and cream, whether or not concentrated or containing added sugar or other sweetening matter or flavored or containing added fruit, nuts or cocoa:</td><td>yogurt</td></tr>
                <tr><td>0403.90.85.00</td><td>67.13%</td><td>Yogurt; buttermilk, curdled milk and cream, kephir and other fermented or acidified milk and cream, whether or not concentrated or containing added sugar or other sweetening matter or flavored or containing added fruit, nuts or cocoa:</td><td>fermented milk other than dried fermented milk or other than dried milk with added lactic ferments</td></tr>
                <tr><td>0403.20.05.00</td><td>63.06%</td><td>Yogurt; buttermilk, curdled milk and cream, kephir and other fermented or acidified milk and cream, whether or not concentrated or containing added sugar or other sweetening matter or flavored or containing added fruit, nuts or cocoa:</td><td>described in general note 15 of the tariff schedule and entered pursuant to its provisions</td></tr>
                <tr><td>8434.10.00.00</td><td>62.94%</td><td>Milking machines and dairy machinery, and parts thereof:</td><td>milking machines</td></tr>
            </table>
        `,

      "goat": ` 
            <table>
                <tr><th>HS Code</th><th>Score</th><th>Chapter Description</th><th>Description</th></tr>
                <tr><td>0104.20.00.00</td><td>100%</td><td>Live sheep and goats:</td><td>goats</td></tr>
                <tr><td>0104.10.00.00</td><td>73.56%</td><td>Live sheep and goats:</td><td>sheep</td></tr>
                <tr><td>1502.10.00</td><td>58.06%</td><td>Fats of bovine animals, sheep or goats, other than those of heading 1503:</td><td>tallow</td></tr>
                <tr><td>1502.10.00.20</td><td>51.85%</td><td>Fats of bovine animals, sheep or goats, other than those of heading 1503:</td><td>edible</td></tr>
                <tr><td>1502.10.00.40</td><td>51.32%</td><td>Fats of bovine animals, sheep or goats, other than those of heading 1503:</td><td>inedible</td></tr>
            </table>
        `,


      "sheep": `
            <table>
                <tr><th>HS Code</th><th>Score</th><th>Chapter Description</th><th>Description</th></tr>
                <tr><td>0104.10.00.00</td><td>100%</td><td>Live sheep and goats:</td><td>sheep</td></tr>
                <tr><td>0104.20.00.00</td><td>73.56%</td><td>Live sheep and goats:</td><td>goats</td></tr>
                <tr><td>5109.10.90.00</td><td>66.83%</td><td>Yarn of wool or of fine animal hair, put up for retail sale:</td><td>other</td></tr>
                <tr><td>5109.10</td><td>65.84%</td><td>Yarn of wool or of fine animal hair, put up for retail sale:</td><td>containing 85 percent or more by weight of wool or of fine animal hair</td></tr>
                <tr><td>5109.10.40.00</td><td>61.7%</td><td>Yarn of wool or of fine animal hair, put up for retail sale:</td><td>of angora rabbit hair</td></tr>
                <tr><td>4105.10.90.00</td><td>58.25%</td><td>Tanned or crust skins of sheep or lambs, without wool on, whether or not split, but not further prepared:</td><td>other</td></tr>
                <tr><td>4105.10.10.00</td><td>53.73%</td><td>Tanned or crust skins of sheep or lambs, without wool on, whether or not split, but not further prepared:</td><td>wet blues</td></tr>
            </table>
        `, 
        
     "shoes": `
        <table>
            <tr><th>HS Code</th><th>Score</th><th>Chapter Description</th><th>Description</th></tr>
            <tr><td>6404.11.90.70</td><td>73.5%</td><td>Footwear with outer soles of rubber, plastics, leather or composition leather and uppers of textile materials:</td><td>ski boots cross country ski footwear and snowboard boots</td></tr>
            <tr><td>6404.11</td><td>73.47%</td><td>Footwear with outer soles of rubber, plastics, leather or composition leather and uppers of textile materials:</td><td>sports footwear tennis shoes basketball shoes gym shoes training shoes and the like</td></tr>
            <tr><td>6403.99.90.21</td><td>73.41%</td><td>Footwear with outer soles of rubber, plastics, leather or composition leather and uppers of leather:</td><td>with pigskin uppers</td></tr>
            <tr><td>6404.11.90.40</td><td>73.15%</td><td>Footwear with outer soles of rubber, plastics, leather or composition leather and uppers of textile materials:</td><td>ski boots cross country ski footwear and snowboard boots</td></tr>
            <tr><td>6403.99.90.31</td><td>72.95%</td><td>Footwear with outer soles of rubber, plastics, leather or composition leather and uppers of leather:</td><td>other</td></tr>
            <tr><td>6403.99.90.41</td><td>72.61%</td><td>Footwear with outer soles of rubber, plastics, leather or composition leather and uppers of leather:</td><td>other tennis shoes basketball shoes and the like</td></tr>
            <tr><td>6405.20.90.15</td><td>64.69%</td><td>Other footwear:</td><td>house slippers</td></tr>
            <tr><td>6405.10.00.90</td><td>64.61%</td><td>Other footwear:</td><td>other</td></tr>
            <tr><td>6405.20.90.80</td><td>64.36%</td><td>Other footwear:</td><td>other</td></tr>
        </table>
      `,
    };

    // Check if the input matches any key in the outputs object
    if (outputs[inputText]) {
      outputDiv.innerHTML = outputs[inputText];
    } else {
      outputDiv.innerHTML = "<p>No matching output found.</p>";
    }

    // Hide loading and show output
    loadingDiv.style.display = "none";
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "block";
  }, 2000);
}

function goBack() {
  // Show the original page and hide the output page
  document.getElementById("page2").style.display = "none";
  document.getElementById("page1").style.display = "block";
  location.reload(); // Refresh the page
}
