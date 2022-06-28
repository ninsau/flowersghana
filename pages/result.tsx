import NotificationComponent from "../components/Notification";
import SuccessComponent from "../components/Success";
import { adminUpdateMail, orderUpdateMail } from "../lib/api-helper";

const Results = (data: any) => {
  try {
    if (data.props.data.email && data.props.data.trackingID) {
      orderUpdateMail(data.props.data.email, data.props.data.trackingID);
      adminUpdateMail(process.env.NEXT_PUBLIC_ADMIN_ONE!);
      adminUpdateMail(process.env.NEXT_PUBLIC_ADMIN_TWO!);
    }
  } catch (error) {
    console.log(error);
  }

  return (
    <>
      <pre>
        {data.props.data.trackingID ? (
          <>
            <SuccessComponent trackingId={data.props.data.trackingID} />
          </>
        ) : (
          <NotificationComponent content="No order available." color="red" />
        )}
      </pre>
    </>
  );
};

export default Results;

export async function getServerSideProps(context: any) {
  return {
    props: {
      props: { data: context.query },
    },
  };
}
