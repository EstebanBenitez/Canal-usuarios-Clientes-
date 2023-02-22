import React from 'react';
import { useTranslation } from 'react-i18next';

const UserTable = props => {

    const { t } = useTranslation();

    return (
        <table className="table">
            <thead>
            <tr>
                <th>{t("label.name")}</th>
                <th>{t("label.user")}</th>
                <th>{t("label.actions")}</th>
            </tr>
            </thead>
            <tbody>
            {props.users.length > 0 ? (
                props.users.map(user => (
                    <tr key={user.id} className="lstusuarios">
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>
                            <button
                                onClick={() => {
                                    props.editRow(user)
                                }}
                                className="btn btn-primary"
                            >
                                {t("button.edit")}
                            </button>

                            <button className="btn btn-primary"
                                    onClick={() => props.deleteUser(user.id)}
                            >
                                {t("button.delete")}
                            </button>
                        </td>
                    </tr>
                ))
            ) : (
                <tr  className="nico">
                    <td colSpan={3} className="msgvacio">  {t("msg.noUsers")} </td>
                </tr>
            )}
            </tbody>
        </table>
    )
}

export default UserTable
