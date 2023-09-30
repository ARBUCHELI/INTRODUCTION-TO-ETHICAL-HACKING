const settings = {
    /*=== PLEASE DO NOT MAKE ANY EDITS ABOVE THIS LINE ===*/
  
    title: "FakeBank Financial",
  
    users: [
      {
        username: "admin",
        password: "@dmin#1234",
        email: "admin@fakebank.org",
        phone: "123-555-0678",
        social: "111-111-1122",
        checking: "$0.00",
        savings: "$0.00"
      },
      {
        username: "james",
        password: "blames",
        email: "james@myman.org",
        phone: "123-555-0678",
        social: "111-111-1122",
      }
    ],
  
    allowSqlInjection: true,
    injectionString: "'1' OR '1' = '1'",
  
    styling: {
  
      backgroundColor: "#0F1931",
      foregroundColor: "#1c2f5c",
  
      bodyCopyColor: "white",
  
      //The color of text input fields
      fieldInputTextColor: "white",
      fieldInputBackgroundColor: "#0F1931",
      fieldInputBorderColor: "white",
      fieldInputSelectedColor: "#FED230",
  
      //The color of dropdowns
      dropdownBackgroundColor: "#0F1931",
      dropdownBorderColor: "white",
      dropdownTextColor: "white",
  
      //The coloration of the buttons at the bottom of the page (ex. the grade button)
      buttonTextColor: "#0F1931",
      buttonBackgroundColor: "#FED230",
      buttonBorderColor: "#0F1931",
  
      buttonHighlightedTextColor: "#FED230",
      buttonHighlightedBackgroundColor: "#0F1931",
      buttonHighlightedBorderColor: "#FED230",
  
      errorMessageColor: "#FF0000",
  
      /*Adjust the font used by the program.
      This could just be one font, or a list of fonts (as seen by default).
      Each font is separated by a comma. If the first font is unavailable,
      the program will use the next font. If that is also unavailable, it will
      proceed to the next font, and so forth. It is therefore best to include
      as many workable fonts as possible, in case the user does not have many
      fonts available on their system.
      */
      font: `
      Apercu,
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      Roboto,
      Ubuntu,
      Cantarell,
      "Fira Sans",
      "Droid Sans",
      "Helvetica Neue",
      sans-serif
      `,
    },
  
    /*=== PLEASE DO NOT MAKE ANY EDITS BELOW THIS LINE ===*/
  };