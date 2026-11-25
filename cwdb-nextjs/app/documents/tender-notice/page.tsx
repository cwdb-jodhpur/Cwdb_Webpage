'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

export default function TenderNoticePage() {
  const { language } = useLanguage();

  const tenders = [
    {
      no: 1,
      description: 'Clarification regarding corrigendum dated 06.11.2026 – Tender No. 2026_CWDB_932165_1 for “Pashmina Product Innovation – Going Beyond Traditional Shawls” and Preparation of Draft Indian Pashmina Protection, Promotion and Development Bill.',
      link: '/files/Pashmina-Tender-Corrigendum-Clarification.pdf',
    },
    {
      no: 2,
      description: 'REQUEST FOR PROPOSAL (RFP) Selection of Consultant for Conducting Study on Pashmina Product Innovation Going Beyond Traditional Shawls and Preparation of Draft Indian Pashmina Protection, Promotion and Development Bill',
      link: '/files/REQUEST FOR PROPOSAL (RFP) Selection of Consultant for Conducting Study on Pashmina Product Innovation Going Beyond Traditional Shawls and Preparation of Draft Indian Pashmina Protection, Promotion an.pdf',
    },
    {
      no: 3,
      description: ' TENDER DOCUMENT FOR THE SUPPLY OF Spinning Wheel',
      link: '/files/TENDER DOCUMENT FOR THE SUPPLY OF Spinning Wheel.pdf',
    },
    {
      no: 4,
      description: ' EXPRESSION OF INTEREST(EOI) FOR IDENTIFICATION AND EMPANELMENT OF TECHNICAL SUPPORT PARTNERS FOR PROVISIONING OF TRAINING INFRASTRUCTURE, MANPOWER AND OTHER RESOURCES, CANDIDATE MOBILIZATION, TRAINING MATERIALS, AND PLACEMENT SUPPORT IN THE WOOL, TEXTILE AND ALLIED SECTORS.',
      link: '/files/BP-30M31_20260908_181448.pdf',
    },
    {
      no: 5,
      description: 'TENDER DOCUMENT for supply of Spinning Wheel and Hand Operated Carding Machine',
      link: '/files/TENDER DOCUMENT for supply of Spinning Wheel and Hand Operated Carding Machine.pdf',
    },
    {
      no: 6,
      description: 'Tender Document for the supply of Shearing Machine and Accessories',
      link: '/files/Tender Document for the supply of Shearing Machine and Acessories.pdf',
    },
    {
      no: 7,
      description: 'TENDER FOR SUPPLY, INSTALLATION, TESTING AND COMMISSIONING (SITC) OF 250 KWP,35 KWP,50 KWP GRID CONNECTED ROOFTOP SOLAR PV POWER PLANT AT VARIOUS LOCATIONS',
      link: '/files/TENDER FOR SUPPLY, INSTALLATION, TESTING AND COMMISSIONING (SITC) OF 250 KWP,35 KWP,50 KWP GRID CONNECTED ROOFTOP SOLAR PV POWER PLANT AT VARIOUS LOCATIONS.pdf',
    },
    {
      no: 8,
      description: 'Advertisement for Procurement of OFDA 4000 as Proprietary Product',
      link: '/files/Advertisement for Procurement of OFDA 4000 as Proprietary Product.pdf',
    },
    {
      no: 9,
      description: 'Corrigendum for Date Extension of submission of Bid for PMU tender',
      link: '/files/ExtensiondatecorriPMU.pdf',
    },
    {
      no: 10,
      description: 'Corrigendum for Addition/ Modification after Pre Bid Meeting for PMU tender.',
      link: '/files/mod_add_afterprebidqueriesPMU.pdf',
    },
    {
      no: 11,
      description: 'Notice for empanelment of PMU',
      link: '/files/PMUempnltender.pdf',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold mb-6">
          {language === 'en' ? 'Tender Notice' : 'निविदा सूचना'}
        </h1>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">
                  {language === 'en' ? 'No.' : 'क्रमांक'}
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  {language === 'en' ? 'Description' : 'विवरण'}
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  {language === 'en' ? 'Link' : 'लिंक'}
                </th>
              </tr>
            </thead>
            <tbody>
              {tenders.map((tender) => (
                <tr key={tender.no}>
                  <td className="border border-gray-300 px-4 py-2">{tender.no}</td>
                  <td className="border border-gray-300 px-4 py-2">{tender.description}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <Link
                      href={tender.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline font-semibold"
                    >
                      {language === 'en' ? 'View Document' : 'दस्तावेज़ देखें'}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
