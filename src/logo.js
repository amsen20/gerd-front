export function getLogo() {
    return  <svg width="109" height="120" viewBox="0 0 109 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.4149 26.6101C18.1281 26.6101 22.7595 21.9787 22.7595 16.2655C22.7595 10.5523 18.1281 5.9209 12.4149 5.9209C6.70175 5.9209 2.07031 10.5523 2.07031 16.2655C2.07031 21.9787 6.70175 26.6101 12.4149 26.6101Z" fill="#007EA8"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M7.50993 29.496C-1.92765 44.2645 -1.98206 59.4909 4.62514 75.0424C8.79044 37.0145 30.8542 20.0886 72.1957 25.89C58.8501 14.6762 43.5142 12.419 27.0378 15.294C25.0311 26.407 18.9085 31.6887 7.50993 29.496V29.496Z" fill="#007EA8"/>
        <path d="M96.3173 114.078C102.03 114.078 106.662 109.446 106.662 103.733C106.662 98.0201 102.03 93.3887 96.3173 93.3887C90.6041 93.3887 85.9727 98.0201 85.9727 103.733C85.9727 109.446 90.6041 114.078 96.3173 114.078Z" fill="#007EA8"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M101.221 90.5025C110.659 75.734 110.713 60.5076 104.106 44.9561C99.9405 82.984 77.8767 99.9099 36.5352 94.1085C49.8808 105.322 65.2167 107.579 81.6931 104.705C83.6998 93.5915 89.8224 88.3098 101.221 90.5025Z" fill="#007EA8"/>
        <path d="M15.6541 97.782C21.2732 98.8146 24.9912 104.207 23.9586 109.826C22.9259 115.445 17.5336 119.163 11.9145 118.131C6.29542 117.098 2.57736 111.706 3.61001 106.086C4.64266 100.467 10.035 96.7493 15.6541 97.782Z" fill="#F6F8FC"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M11.3528 94.0569C4.73997 77.8256 7.43869 62.8403 16.7478 48.7393C13.9709 86.8937 32.6121 107.529 74.3214 109.295C59.1687 117.912 43.6776 117.36 27.992 111.555C28.0272 100.262 22.96 93.9608 11.3528 94.0571V94.0569Z" fill="#F6F8FC"/>
        <path d="M93.0764 22.218C87.4573 21.1854 83.7392 15.7931 84.7719 10.174C85.8045 4.55488 91.1968 0.83683 96.816 1.86948C102.435 2.90213 106.153 8.29444 105.12 13.9135C104.088 19.5326 98.6955 23.2507 93.0764 22.218Z" fill="#F6F8FC"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M97.3788 25.9422C103.992 42.1735 101.293 57.1588 91.9838 71.2598C94.7607 33.1054 76.1195 12.4703 34.4102 10.7037C49.5629 2.08675 65.054 2.63868 80.7396 8.4443C80.7044 19.7369 85.7716 26.0383 97.3788 25.942V25.9422Z" fill="#F6F8FC"/>
    </svg>;
}

export function teamCircle(team) {
    return <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="25" cy="25" r="25" fill={team === 1 ? "#C7D338" : "#007EA8"}/>
    </svg>
}

export function getClockLogo() {
    return <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 7.66667V13L17 17M25 13C25 19.6274 19.6274 25 13 25C6.37258 25 1 19.6274 1 13C1 6.37258 6.37258 1 13 1C19.6274 1 25 6.37258 25 13Z" stroke="#F6F8FC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>;
}