export const handleError = (error) => {
  const status = error.response?.status;
  let message = 'Oops! something went wrong';
  if (typeof error === 'string') {
    message = error;
  } else {
    message = error?.response?.data?.message || message;
  }

  // if (status !== 401 && status !== 404) {
  //   toast.error((t) => (
  //     <Toaster type={t.type} message={message} handleDismiss={() => toast.dismiss(t.id)} />
  //   ));
  // }
};
