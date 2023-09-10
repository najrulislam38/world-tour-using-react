
const CountryData = ({country, handleVisitedCountry, handleVisitedFlag}) => {
    console.log('inside data ', country, handleVisitedCountry, handleVisitedFlag);
    return (
        <div>
            <p><small>Country Name: {country.name.common}</small></p>
        </div>
    );
};

export default CountryData;