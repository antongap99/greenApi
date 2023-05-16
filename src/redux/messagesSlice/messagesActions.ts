




// export const authRequestAsync = () => (dispatch, getState) => {
//   const token = getState().token.token
//   if (!token) return;
//   dispatch(authRequest());
//   axios.get(`${URL_API}/api/v1/me`, {
//     headers: {
//       Authorization: `bearer ${token}`,
//     }
//   }).then(({ data }) => {
//     const img = data.icon_img.replace(/\?.*$/, '');
//     const authdata = {
//       name: data.name,
//       img: img,
//     }
//     dispatch(authRequestSuccess(authdata));
//   }).catch((err) => {
//     console.log(err.message);
//     dispatch(deleteToken())
//     dispatch(authRequestError(err));
//   })
// }