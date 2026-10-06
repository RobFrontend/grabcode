function ServicesTable() {
  return (
    <div className="comparison-table-wrapper  max-md:scrollbar-none max-md:w-full max-lg:mt-8">
      <table className="comparison-table  max-md:scrollbar-none">
        <thead>
          <tr>
            <th className="max-md:w-max">Funkcja / Potrzeba</th>
            <th className="max-md:w-max">Landing Page</th>
            <th className="max-md:w-max">Strona firmowa</th>
            <th className="max-md:w-max">Rozbudowany serwis</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Jedna usługa / produkt</td>
            <td className="check">✓</td>
            <td className="dash">-</td>
            <td className="dash">-</td>
          </tr>

          <tr>
            <td>Kilka usług</td>
            <td className="dash">-</td>
            <td className="check">✓</td>
            <td className="check">✓</td>
          </tr>

          <tr>
            <td>Realizacje / case studies</td>
            <td className="dash">-</td>
            <td className="check">✓</td>
            <td className="check">✓</td>
          </tr>

          <tr>
            <td>Blog / CMS</td>
            <td className="dash">-</td>
            <td className="optional">opcjonalnie</td>
            <td className="check">✓</td>
          </tr>

          <tr>
            <td>Kilkanaście podstron</td>
            <td className="dash">-</td>
            <td className="dash">-</td>
            <td className="check">✓</td>
          </tr>

          <tr>
            <td className="max-md:w-max">Zaawansowane formularze</td>
            <td className="optional">opcjonalnie</td>
            <td className="optional">opcjonalnie</td>
            <td className="check">✓</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ServicesTable;
