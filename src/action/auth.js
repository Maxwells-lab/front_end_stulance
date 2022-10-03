import * as api from '../api/index';

export const signup = (userData, history) => async (dispatch) => {
  try {
    const { data } = await api.signup(userData);
    dispatch({ type: 'AUTH', data });
    history.go('/');
  } catch (error) {
    console.log(error);
  }
};
export const signupserviceprovider =
  (userData, history) => async (dispatch) => {
    try {
      const { data } = await api.signupserviceprovider(userData);
      dispatch({ type: 'AUTHSERVICE', data });
      history.push('/freelancerinfo');
    } catch (error) {
      console.log(error);
    }
  };

export const loginhirer = (loginData, history) => async (dispatch) => {
  try {
    const { data } = await api.loginhirer(loginData);
    dispatch({ type: 'AUTH', data });
    history.push('/');
  } catch (error) {
    console.log(error);
  }
};

export const loginservicer = (loginData, history) => async (dispatch) => {
  try {
    const { data } = await api.loginservicer(loginData);
    dispatch({ type: 'AUTH', data });
    history.push('/portfoliopage');
  } catch (error) {
    console.log(error);
  }
};

export const freelancerinfo =
  (freelancerData, history, freelancerId) => async (dispatch) => {
    try {
      const { data } = await api.freelancerinfo(freelancerData, freelancerId);
      history.push('/portfoliopage');
    } catch (error) {
      console.log(error);
    }
  };
