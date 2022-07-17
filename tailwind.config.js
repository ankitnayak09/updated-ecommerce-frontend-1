module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    colors:{
      "sec-light-orange":"#FFEFF0",
      "pri-blue":"#2BB4AB",
      "sec-orange":"#EFB3B6",
      "pri-orange":"#F3535B",
      "mid-orange":"#F36C61",
      "pri-yellow":"#F38D60",
      "sec-text-gray":"#565656",
      "pri-text-gray":"#2E2E2E",
      "pri-text-light-gray":"#4E4E4E",
      "success-green":"#00D208",
      // "success-green":"#00FF0A",
    },
    
    borderRadius: {
      'primary': '40px',
      'small': '9px',
      'medium': '19px',
     
    },
    
  //   backgroundImage: {
  //     'prim-gradient': "linear-gradient(to right bottom, rgba('#7ed56f',0.8), rgba('#28b485',0.8)), rgba('#28b485',0.8))",
  //  },
    dropShadow:{
      '2xl':" 3px 5px 0px  rgba(243,83,91,0.9)",
      'pri-small':" 2px 3px 0px  rgba(243,83,91,0.9)",
      "cartBtn":"6px 15px 6px  rgba(243,83,91,0.9)"
    },
    boxShadow: {
      'test': ' 0px -8px 37px 0px rgba(243,83,91, 0.9)',
      "myOrderTop":"0px -11px 50px 0px rgba(40,40,40,0.55)"
    }
  },
  },
  plugins: [],
  // plugins: [srequire('@tailwindcss/forms')],
}
 