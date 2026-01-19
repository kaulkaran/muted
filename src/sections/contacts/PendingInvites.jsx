import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPendingInvites, acceptInvite } from "../../app/contacts/contactsThunk";

const PendingInvites = () => {
  const dispatch = useDispatch();
  const pendingInvites = useSelector(
    (state) => state.contacts.pendingInvites
  );

  useEffect(() => {
    dispatch(fetchPendingInvites());
  }, [dispatch]);

  if (!pendingInvites.length) return null;

  return (
    <div className="mb-10">
      <h2 className="text-lg font-bold text-[#141415] mb-4">
        Pending Invites
      </h2>

      <div className="space-y-3">
        {pendingInvites.map((invite) => {
          const sender = invite.requester;

          return (
            <div
              key={invite._id}
              className="flex items-center justify-between p-4 bg-white rounded-xl border border-black/5"
            >
              <div>
                <h4 className="font-semibold text-sm text-[#141415]">
                  {sender.displayName}
                </h4>
                <p className="text-xs text-[#74717a]">
                  {sender.email}
                </p>
              </div>

              <button
                onClick={() => dispatch(acceptInvite(invite._id))}
                className="px-4 h-9 rounded-full bg-[rgb(var(--primary))] text-white text-sm font-semibold hover:brightness-110 transition"
              >
                Accept
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PendingInvites;
